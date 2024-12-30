import { z } from 'zod';

export const zString = z.string().min(1, 'Field cannot be empty').trim();

export const zPhoneNumber = zString
  .min(10, 'Phone number must be at least 10 digits')
  .regex(/^\+?\d+$/);

export const zEmail = zString.email('Invalid email address');

export const zStringToBoolean = zString
  .regex(/^(true|false)$/i)
  .transform((value) => value === 'true');
