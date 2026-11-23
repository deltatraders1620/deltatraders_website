/**
 * Delta Traders Email Dispatch Utility
 * 1. Primary: Direct Gmail SMTP dispatch via local/production Node server (POST /api/send-email)
 * 2. Secondary: Serverless FormSubmit AJAX API straight to deltatraders.1620@gmail.com
 * 3. Client Fallback: Direct 1-click web Gmail compose tab and mailto
 */

import { COMPANY_INFO } from '../data/products';

const SMTP_API_URL = import.meta.env.VITE_SMTP_API_URL || '/api/send-email';

export async function sendEmailEnquiry(data, formType = 'Enquiry') {
  const targetEmail = COMPANY_INFO.email; // deltatraders.1620@gmail.com
  const subject = `[Delta Traders Website] ${formType} - ${data.name || data.businessName || data.contactPerson || 'Customer'}`;

  // Build clean text body
  let textBody = `DELTA TRADERS — ${formType.toUpperCase()}\n`;
  textBody += `====================================\n\n`;
  if (data.name) textBody += `Customer / Contact Name: ${data.name}\n`;
  if (data.businessName) textBody += `Business / Organization: ${data.businessName}\n`;
  if (data.phone) textBody += `Phone / WhatsApp: ${data.phone}\n`;
  if (data.email) textBody += `Customer Email: ${data.email}\n`;
  if (data.businessType) textBody += `Business Type: ${data.businessType}\n`;
  if (data.location) textBody += `Delivery Location: ${data.location}\n`;
  if (data.frequency) textBody += `Delivery Frequency: ${data.frequency}\n`;
  if (data.subject) textBody += `Enquiry Subject: ${data.subject}\n`;
  textBody += `\n------------------------------------\n`;
  textBody += `REQUIREMENTS / DETAILS / ITEMS:\n`;
  textBody += `${data.productsList || data.message || data.details || data.itemsSummary || 'Standard product inquiry'}\n`;
  if (data.quantities) textBody += `Estimated Volume: ${data.quantities}\n`;
  if (data.notes) textBody += `Additional Notes: ${data.notes}\n`;
  textBody += `\n====================================\n`;
  textBody += `Submitted from Delta Traders Website\n`;
  textBody += `Target: ${targetEmail}\n`;

  // Payload for SMTP backend & FormSubmit
  const payload = {
    formType,
    subject,
    name: data.name || data.contactPerson || 'Delta Traders Customer',
    businessName: data.businessName || '',
    phone: data.phone || 'Not provided',
    email: data.email || 'Not provided',
    businessType: data.businessType || '',
    location: data.location || '',
    frequency: data.frequency || '',
    productsList: data.productsList || data.message || data.details || data.itemsSummary || '',
    quantities: data.quantities || '',
    notes: data.notes || '',
  };

  // Step 1: Try Gmail SMTP Server (Node/Nodemailer backend)
  try {
    const smtpController = new AbortController();
    const smtpTimeout = setTimeout(() => smtpController.abort(), 4000); // 4s timeout

    const smtpRes = await fetch(SMTP_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: smtpController.signal,
    });
    clearTimeout(smtpTimeout);

    if (smtpRes.ok) {
      const smtpJson = await smtpRes.json();
      if (smtpJson.success) {
        return {
          success: true,
          method: 'smtp',
          message: `Delivered directly to ${targetEmail} via Gmail SMTP`,
        };
      }
    }
  } catch (smtpErr) {
    console.info('SMTP backend offline or unreachable, switching to FormSubmit gateway...');
  }

  // Step 2: FormSubmit Direct AJAX API Gateway
  try {
    const fsPayload = {
      _subject: subject,
      _captcha: 'false',
      _template: 'table',
      name: payload.name,
      email: data.email || 'noreply@deltatraders.com',
      phone: payload.phone,
      business_name: payload.businessName || 'Not provided',
      business_type: payload.businessType || 'Not provided',
      delivery_location: payload.location || 'Not provided',
      delivery_frequency: payload.frequency || 'Not provided',
      enquiry_details: payload.productsList || 'None',
      quantities: payload.quantities || '',
      notes: payload.notes || '',
      _replyto: data.email || targetEmail,
    };

    const fsRes = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(fsPayload),
    });

    const fsJson = await fsRes.json();
    if (fsRes.ok && (fsJson.success === 'true' || fsJson.success === true || fsJson.message)) {
      return {
        success: true,
        method: 'api',
        message: `Email delivered directly to ${targetEmail}`,
      };
    }
  } catch (fsErr) {
    console.warn('FormSubmit gateway fallback triggered:', fsErr);
  }

  // Step 3: Browser Fallback (1-click Gmail Web compose & mailto)
  const gmailUrl = getGmailWebUrl(subject, textBody);
  return {
    success: false,
    method: 'fallback',
    gmailUrl,
    mailtoUrl: `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textBody)}`,
    message: 'Could not connect to automated email dispatch. Click below to compose directly in Gmail.',
  };
}

/**
 * Direct web Gmail compose link — opens directly in Google Chrome / browser tab!
 */
export function getGmailWebUrl(subject, body) {
  const base = 'https://mail.google.com/mail/?view=cm&fs=1';
  const to = encodeURIComponent(COMPANY_INFO.email);
  const su = encodeURIComponent(subject);
  const bo = encodeURIComponent(body);
  return `${base}&to=${to}&su=${su}&body=${bo}`;
}
