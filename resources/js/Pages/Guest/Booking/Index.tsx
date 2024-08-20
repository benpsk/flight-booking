import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import { FormEventHandler } from 'react';
import ContactForm from './Partial/ContactForm';
import PassengerForm from './Partial/PassengerForm';
import { Button } from '@/components/ui/button';
import Step from '../Partials/Step';

export default function Index() {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        first_name: '',
        last_name: '',
        phone_no: '',
        email: '',
        passenger: {
            gender: '',
            first_name: '',
            last_name: '',
            dob: '',
            nationality: '',
        }
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };
    return (
        <Layout>
            <Head title="Booking" />
            <form onSubmit={submit} className='flex flex-col gap-3 sm:gap-6'>
                <Step />
                <ContactForm data={data} setData={setData} errors={errors} />
                <PassengerForm data={data} setData={setData} errors={errors} />
                <div className="">
                    <Button disabled={processing}>Payment</Button>
                </div>
            </form>
        </Layout>
    );
}
