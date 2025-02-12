'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';
import { Input, InputGroup } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Text } from '@/components/ui/Text';
import { zLoginFormSchema } from '@/validation/login.validation';

const toastId = 'register-form-toast';
type FormSchema = z.infer<typeof zLoginFormSchema>;

function onInvalid() {
  // function onInvalid(_?: FieldErrors<FormSchema>) {
  toast.error('Please fix the errors in the form.', { id: toastId });
}

export function LoginForm() {
  const router = useRouter();

  const methods = useForm<FormSchema>({ resolver: zodResolver(zLoginFormSchema) });
  const { formState, handleSubmit } = methods;
  const { isSubmitting } = formState;
  return (
    <div className="py-48">
      <div className="mb-8 space-y-1">
        <Text as="h1" size="4xl" className="font-bold">
          Register/Login
        </Text>
        <Text as="p" color="neutral">
          Enter your trip code below and you will be transfered to your GroupCollect payment page.
        </Text>
      </div>
      <FormProvider {...methods}>
        <Form
          onSubmit={handleSubmit(({ tripCode }) => {
            const tripCodeURL = `https://americantravelconsulting.grcoll.co/go/${tripCode}`;
            router.push(tripCodeURL);
          }, onInvalid)}>
          <InputGroup>
            <Label field="tripCode">Trip Code</Label>
            <Input field="tripCode" type="text" required />
          </InputGroup>
          <Button type="submit" className="ml-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Login'}
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
}
