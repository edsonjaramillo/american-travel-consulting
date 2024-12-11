import z from 'zod';

import { zString } from '@/app/validation/core.validation';

export const zRegisterFormSchema = z.object({
  tripCode: zString,
});
