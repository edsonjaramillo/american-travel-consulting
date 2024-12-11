import z from 'zod';

import { zEmail, zPhoneNumber, zString } from '@/app/validation/core.validation';

export const zContactFormSchema = z.object({
  name: zString,
  organization: zString,
  destination: zString,
  email: zEmail,
  phoneNumber: zPhoneNumber,
  message: zString.min(10, 'Message must be at least 10 characters'),
});
