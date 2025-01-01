import { z } from 'zod';

import { EmailJS } from '@/email/EmailJS';
import { zContactFormSchema } from '@/validation/contact.validation';

export type ContactFormSchema = z.infer<typeof zContactFormSchema>;

export async function POST(request: Request) {
  const body = await request.json();
  const { success, data } = zContactFormSchema.safeParse(body);
  if (!success) {
    return new Response('Invalid form data.', { status: 400 });
  }

  const emailJSResponse = await EmailJS.sendQuote(data);
  if (emailJSResponse.status !== 200) {
    return new Response('Error sending email.', { status: 500 });
  }

  return new Response('Success!', {
    status: 200,
    statusText: 'Message sent!',
  });
}
