import { type Employee } from '@/cms/types';
import { Text } from '@/components/ui/Text';

type EmployeeProps = {
  employee: Employee;
};

export function EmployeeCard({ employee }: EmployeeProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Text as="h2" className="font-semibold" size="3xl">
          {employee.name}
        </Text>
        <MailIcon name={employee.name} email={employee.email} />
      </div>
      <Text as="p" className="indent-12" color="neutral">
        {employee.biography}
      </Text>
      <blockquote>
        <Text as="p" className="indent-12 italic" color="neutral">
          {employee.quote}
        </Text>
      </blockquote>
    </div>
  );
}

type MailIconProps = {
  name: string;
  email: string;
};
function MailIcon({ name, email }: MailIconProps) {
  return (
    <a href={`mailto:${email}`} className="flex" title={`Email ${name}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mt-4 size-5 fill-primary">
        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
      </svg>
    </a>
  );
}
