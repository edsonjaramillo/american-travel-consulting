import z from 'zod';

import { zString } from '@/validation/core.validation';

export const zRegisterFormSchema = z.object({
  tripCode: zString,
});