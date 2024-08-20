import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ContactForm({ data, errors, setData }: { data: any, errors: any, setData: any }) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
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
                            required
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
                            required
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
                            required
                            autoComplete="email"
                        />
                        <InputError message={errors.email} />
                    </div>
                </div>
            </section>
            <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <header className='bg-teal-600 text-white text-center p-8 sm:rounded-t-lg'>
                    <p>Bangkok ---- Chiang Mai</p>
                    <p>29 Aug, 2024</p>
                </header>
                <div className='p-4 sm:p-6'>
                    <p>Bangkok ---- Chiang Mai</p>
                    <div className='flex items-center gap-2 my-4'>
                        <Avatar className='w-16 h-16' >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Name</p>
                    </div>
                    <p>29 Aug 12:20 - 13:15, 1h 15m</p>
                </div>
            </div>
        </div>
    );
}
