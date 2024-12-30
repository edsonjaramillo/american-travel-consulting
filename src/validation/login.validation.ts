import z from 'zod';

import { zString } from '@/validation/core.validation';

export const zLoginFormSchema = z.object({
  tripCode: zString,
});
