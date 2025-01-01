import { z } from 'zod';

import { zContactFormSchema } from '@/validation/contact.validation';

const template_id = process.env.EMAILJS_TEMPLATE_ID as string;
const user_id = process.env.EMAILJS_USER_ID as string;
const service_id = process.env.EMAILJS_SERVICE_ID as string;
const accessToken = process.env.EMAILJS_PRIVATE_KEY as string;

export type EmailJSResponse = {
  status: number;
  text: string;
};

export type ContactFormTemplate = z.infer<typeof zContactFormSchema>;

export class EmailJS {
  static async sendQuote(template_params: ContactFormTemplate): Promise<EmailJSResponse> {
    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          template_id,
          template_params,
          service_id,
          user_id,
          accessToken,
        }),
      });
      return { status: 200, text: 'Success' };
    } catch (error) {
      console.log('🚀  EmailJS  sendQuote  error:', error);
      return { status: 500, text: 'Error occured' };
    }
  }
}
