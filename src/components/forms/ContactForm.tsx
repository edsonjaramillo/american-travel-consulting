'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/Form';
import { Input, InputGroup, Textarea } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Text, textVariants } from '@/components/ui/Text';
import { cn } from '@/lib/ui/tw';
import { zContactFormSchema } from '@/validation/contact.validation';

const toastId = 'contact-form-toast';
type FormSchema = z.infer<typeof zContactFormSchema>;

async function onSubmit(data: FormSchema) {
  toast.loading('Sending message...', { id: toastId, duration: Infinity });

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error('Error sending email:', response.statusText);
    return toast.error('Error sending email.', { id: toastId });
  }

  console.log('Message sent!');
  toast.success('Message sent!', { id: toastId });
}

// function onInvalid(errors: FieldErrors<FormSchema>) {
function onInvalid() {
  toast.error('Please fix the errors in the form.', { id: toastId });
}

export function ContactForm() {
  const methods = useForm<FormSchema>({ resolver: zodResolver(zContactFormSchema) });
  const { formState, handleSubmit } = methods;
  const { isSubmitting } = formState;
  return (
    <div className="py-8">
      <div className="mb-8 space-y-1">
        <Text as="h1" size="4xl" className="font-bold">
          Contact Us
        </Text>
        <Text as="p" color="neutral">
          We&apos;ll get back to you as soon as we can.
        </Text>
        <ContactItem href="mailto:chris@americantravelconsulting.com" icon={<MailIcon />}>
          chris@americantravelconsulting.com
        </ContactItem>
        <ContactItem href="tel:2565720669" icon={<PhoneIcon />}>
          (256) 572-0669
        </ContactItem>
      </div>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <InputGroup>
            <Label field="name">Name</Label>
            <Input field="name" type="text" autoComplete="name" required />
          </InputGroup>
          <InputGroup>
            <Label field="organization">Organization</Label>
            <Input field="organization" type="text" required />
          </InputGroup>
          <InputGroup>
            <Label field="destination">Destination</Label>
            <Input field="destination" type="text" required />
          </InputGroup>
          <InputGroup>
            <Label field="email">Email</Label>
            <Input field="email" type="email" autoComplete="email" required />
          </InputGroup>
          <InputGroup>
            <Label field="phoneNumber">Phone Number</Label>
            <Input field="phoneNumber" type="tel" autoComplete="tel" required />
          </InputGroup>
          <InputGroup>
            <Label field="message">Message</Label>
            <Textarea field="message" required />
          </InputGroup>
          <Button type="submit" className="ml-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
}

type BaseIconProps = React.ComponentProps<'svg'>;
function BaseIcon({ children, ...props }: BaseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="block size-4 shrink-0 text-grayscale-neutral transition-colors duration-base group-hover/contact-item:fill-secondary"
      {...props}>
      {children}
    </svg>
  );
}

function MailIcon() {
  return (
    <BaseIcon>
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </BaseIcon>
  );
}

function PhoneIcon() {
  return (
    <BaseIcon>
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </BaseIcon>
  );
}

type ContactItemProps = React.ComponentProps<'div'> & {
  href: string;
  icon: React.ReactNode;
};

const textCls = cn(
  'line-clamp-1 text-left transition-colors duration-base group-hover/contact-item:text-secondary',
  textVariants({ color: 'neutral', size: 'small' }),
);

function ContactItem({ icon, href, children, ...props }: ContactItemProps) {
  return (
    <div className="group/contact-item line-clamp-1 flex w-fit items-center gap-2" {...props}>
      {icon}
      <a href={href} className={textCls}>
        {children}
      </a>
    </div>
  );
}
