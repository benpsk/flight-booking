import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';

interface FormData {
    first_name: string,
    last_name: string,
    phone_no: string,
    email: string,
}
interface FormProps {
    data: FormData,
    setData: (key: keyof FormData, value: string) => void;
    errors: Record<string, string>;
}
export default function ContactForm({ data, errors, setData }: FormProps) {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact Detail</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    This is where your E-ticket will be sent
                </p>
            </header>
            <div className="mt-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="first_name">First name</Label>
                    <Input
                        id="first_name"
                        className="mt-1 block w-full"
                        value={data.first_name}
                        onChange={(e) => setData('first_name', e.target.value)}
                        autoComplete="first_name"
                    />

                    <InputError message={errors.first_name} />
                </div>
                <div>
                    <Label htmlFor="last_name">Last name</Label>
                    <Input
                        id="last_name"
                        className="mt-1 block w-full"
                        value={data.last_name}
                        onChange={(e) => setData('last_name', e.target.value)}
                        autoComplete="last_name"
                    />
                    <InputError message={errors.last_name} />
                </div>
                <div>
                    <Label htmlFor="phone_no">Phone No.</Label>
                    <Input
                        id="phone_no"
                        className="mt-1 block w-full"
                        value={data.phone_no}
                        onChange={(e) => setData('phone_no', e.target.value)}
                        autoComplete="phone_no"
                    />
                    <InputError message={errors.phone_no} />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type='email'
                        id="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        autoComplete="email"
                    />
                    <InputError message={errors.email} />
                </div>
            </div>
        </section>
    );
}
