/**
 * Cloudflare Pages Serverless Function: /api/send-email
 * Automatically executed on Cloudflare's Global Edge Network
 * Receives quote requests and delivers them straight to deltatraders.1620@gmail.com
 */

export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const data = await context.request.json();
    const targetEmail = context.env?.TARGET_EMAIL || 'deltatraders.1620@gmail.com';
    const formType = data.formType || 'Enquiry';
    const subject = data.subject || `[Delta Traders Website] ${formType} - ${data.name || data.businessName || 'Customer'}`;

    // Payload for direct delivery to deltatraders.1620@gmail.com
    const payload = {
      _subject: subject,
      _captcha: 'false',
      _template: 'table',
      name: data.name || data.contactPerson || 'Delta Traders Customer',
      email: data.email || 'noreply@deltatraders.com',
      phone: data.phone || 'Not provided',
      business_name: data.businessName || 'Not provided',
      business_type: data.businessType || 'Not provided',
      delivery_location: data.location || 'Not provided',
      delivery_frequency: data.frequency || 'Not provided',
      enquiry_details: data.productsList || data.message || data.details || data.itemsSummary || 'Standard product inquiry',
      quantities: data.quantities || '',
      notes: data.notes || '',
      _replyto: data.email && data.email.includes('@') ? data.email : targetEmail,
    };

    // Forward to FormSubmit delivery engine
    const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
      return new Response(
        JSON.stringify({
          success: true,
          method: 'cloudflare-pages-function',
          message: `Enquiry successfully delivered to ${targetEmail}`,
        }),
        { status: 200, headers: corsHeaders }
      );
    } else {
      throw new Error(result.message || 'Email delivery provider returned an error');
    }
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message,
        message: 'Cloudflare Pages Function encountered an error during dispatch',
      }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
