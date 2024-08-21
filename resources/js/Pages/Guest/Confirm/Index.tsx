import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import Step from '../Partials/Step';
import Detail from './Partial/Detail';
import PaymentForm from './Partial/PaymentForm';

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
            <Head title="Payment" />
            <form onSubmit={submit} className='flex flex-col gap-3 sm:gap-6'>
                <Step />
                <Detail />
            </form>
        </Layout>
    );
}
