/**
 * Delta Traders — Official Gmail SMTP Dispatch Server
 * Receives quote requests and business enquiries from the website
 * and delivers them straight to deltatraders.1620@gmail.com via Gmail SMTP.
 */

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable JSON body parsing and CORS for frontend requests
app.use(express.json());
app.use(cors({
  origin: '*', // Allows requests from local Vite dev (localhost:5173) and production web domains
  methods: ['GET', 'POST', 'OPTIONS'],
}));

const TARGET_EMAIL = process.env.TARGET_EMAIL || 'deltatraders.1620@gmail.com';
const SMTP_USER = process.env.SMTP_USER || 'deltatraders.1620@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || ''; // Google 16-character App Password

// Create Nodemailer Transporter using Gmail SMTP
function createTransporter() {
  if (!SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS.replace(/\s+/g, ''), // Strips any spaces if user pasted "xxxx xxxx xxxx xxxx"
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const configured = Boolean(SMTP_PASS && SMTP_PASS.trim().length >= 16);
  res.json({
    status: 'ok',
    service: 'Delta Traders SMTP Server',
    targetEmail: TARGET_EMAIL,
    smtpConfigured: configured,
    message: configured
      ? 'Gmail SMTP credentials active and ready to deliver emails.'
      : 'SMTP_PASS not yet configured. Please set your 16-character Google App Password in .env.',
  });
});

// Main Email Dispatch Endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const {
      formType = 'General Enquiry',
      name = 'Website Visitor',
      businessName,
      phone = 'Not provided',
      email = 'Not provided',
      businessType,
      location,
      frequency,
      subject,
      message,
      productsList,
      quantities,
      notes,
    } = req.body;

    const emailSubject = subject || `[Delta Traders Website] New ${formType} from ${name}`;
    const cleanPhone = phone.replace(/[^0-9]/g, '');

    // Format rich HTML email for Delta Traders inbox
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f1f5f9; margin: 0; padding: 20px; color: #0f172a; }
          .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .header { background: linear-gradient(135deg, #091a2f 0%, #034b6b 100%); color: #ffffff; padding: 28px 32px; }
          .badge { display: inline-block; background: #06b6d4; color: #091a2f; font-weight: 800; font-size: 11px; text-transform: uppercase; padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px; margin-bottom: 8px; }
          .title { font-size: 22px; font-weight: 800; margin: 0; }
          .subtitle { font-size: 13px; color: #cbd5e1; margin-top: 4px; }
          .content { padding: 32px; }
          .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .info-table td { padding: 10px 12px; font-size: 13px; border-bottom: 1px solid #f1f5f9; }
          .info-table td.label { font-weight: 700; color: #475569; width: 35%; background: #f8fafc; }
          .info-table td.value { color: #0f172a; font-weight: 600; }
          .highlight-box { background: #ecfeff; border-left: 4px solid #06b6d4; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-size: 13px; line-height: 1.6; }
          .action-buttons { display: flex; gap: 12px; margin-top: 24px; }
          .btn-wa { display: inline-block; background: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; }
          .btn-call { display: inline-block; background: #091a2f; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; }
          .footer { background: #f8fafc; padding: 16px 32px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="badge">${formType.toUpperCase()}</div>
            <h1 class="title">New Website Lead: ${name}</h1>
            <div class="subtitle">Received via Delta Traders Online Portal (Maduranthagam)</div>
          </div>
          
          <div class="content">
            <h3 style="margin-top:0; color:#091a2f; font-size:16px;">Customer & Business Information</h3>
            <table class="info-table">
              <tr>
                <td class="label">Customer Name</td>
                <td class="value">${name}</td>
              </tr>
              ${businessName ? `<tr><td class="label">Business Name</td><td class="value">${businessName}</td></tr>` : ''}
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value"><strong style="color:#0284c7;">${phone}</strong></td>
              </tr>
              ${email !== 'Not provided' ? `<tr><td class="label">Email Address</td><td class="value">${email}</td></tr>` : ''}
              ${businessType ? `<tr><td class="label">Business Type</td><td class="value">${businessType}</td></tr>` : ''}
              ${location ? `<tr><td class="label">Delivery Location</td><td class="value">${location}</td></tr>` : ''}
              ${frequency ? `<tr><td class="label">Delivery Frequency</td><td class="value">${frequency}</td></tr>` : ''}
            </table>

            <h3 style="color:#091a2f; font-size:16px;">Requested Items & Requirements</h3>
            <div class="highlight-box">
              <pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${productsList || message || 'No item details specified.'}</pre>
            </div>

            ${quantities ? `<p style="font-size:13px;"><strong>Estimated Order Volume:</strong> ${quantities}</p>` : ''}
            ${notes ? `<p style="font-size:13px;"><strong>Additional Notes:</strong> ${notes}</p>` : ''}

            <h3 style="color:#091a2f; font-size:14px; margin-top: 24px;">Immediate Quick Actions</h3>
            <div class="action-buttons">
              ${cleanPhone.length >= 10 ? `
                <a class="btn-wa" href="https://wa.me/91${cleanPhone.slice(-10)}?text=Hi%20${encodeURIComponent(name)},%20thank%20you%20for%20contacting%20Delta%20Traders.%20Regarding%20your%20enquiry:">
                  💬 Reply on WhatsApp
                </a>
                <a class="btn-call" href="tel:+91${cleanPhone.slice(-10)}">
                  📞 Call Customer
                </a>
              ` : ''}
            </div>
          </div>

          <div class="footer">
            Delta Traders — Wholesale Groceries & Packaging Material Supplies<br/>
            Maduranthagam, Chengalpattu District, Tamil Nadu • Contact: +91 8668054308
          </div>
        </div>
      </body>
      </html>
    `;

    const plainText = `
DELTA TRADERS — NEW ${formType.toUpperCase()}
==================================================
Customer Name: ${name}
Business Name: ${businessName || 'N/A'}
Phone/WhatsApp: ${phone}
Email: ${email}
Business Type: ${businessType || 'N/A'}
Delivery Location: ${location || 'N/A'}
Frequency: ${frequency || 'N/A'}

REQUIREMENTS / ITEMS:
${productsList || message || 'None'}

Volume: ${quantities || 'N/A'}
Notes: ${notes || 'N/A'}
==================================================
    `;

    const transporter = createTransporter();

    if (!transporter) {
      console.warn('⚠️ SMTP_PASS is missing in .env. Falling back gracefully.');
      return res.status(200).json({
        success: false,
        fallbackNeeded: true,
        message: 'SMTP credentials not configured on server. Please configure SMTP_PASS in .env.',
      });
    }

    // Send email via Gmail SMTP
    const mailOptions = {
      from: `"Delta Traders Portal" <${SMTP_USER}>`,
      to: TARGET_EMAIL,
      replyTo: email !== 'Not provided' ? email : SMTP_USER,
      subject: emailSubject,
      text: plainText,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully via Gmail SMTP: ${info.messageId}`);

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: `Enquiry delivered directly to ${TARGET_EMAIL} via Gmail SMTP`,
    });
  } catch (error) {
    console.error('❌ Gmail SMTP dispatch error:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: 'Failed to send via Gmail SMTP.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Delta Traders SMTP Server running on port ${PORT}`);
  console.log(`📬 Deliveries targeted to: ${TARGET_EMAIL}`);
  console.log(`🔑 SMTP Configured: ${Boolean(SMTP_PASS && SMTP_PASS.trim().length >= 16) ? 'YES (Active)' : 'NO (Add SMTP_PASS in .env)'}`);
  console.log(`======================================================\n`);
});
