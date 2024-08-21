import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/input-error';

interface DataType {
    is_admin: true
    email: string,
    password: string,
    remember: boolean,
};
export default function Login({ status }: { status?: string, }) {
    const { data, setData, post, processing, errors, reset } = useForm<DataType>({
        is_admin: true,
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout title={<span>Admin Login</span>}>
            <Head title="Admin Log in" />

            {status && <div className="mb-4 font-medium text-sm text-red-600">{status}</div>}
            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" value={data.email} onChange={e => setData('email', e.target.value)} id='email' placeholder="johndoe@gmail.com" />
                    <InputError message={errors.email} />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" value={data.password} onChange={e => setData('password', e.target.value)} id='password' />
                    <InputError message={errors.password} />
                </div>

                <div className="mt-6 flex justify-between">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="remember_me"
                            checked={data.remember}
                            onCheckedChange={e => setData('remember', e as boolean)}
                            className="bg-white border-gray-400"
                        />
                        <Label htmlFor="remember_me" className='text-sm'>
                            Remember Me
                        </Label>
                    </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                    <Button disabled={processing}>Log in</Button>
                </div>
            </form>
        </GuestLayout>
    );
}
