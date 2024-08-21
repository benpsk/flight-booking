import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import { FormEventHandler } from 'react';
import Step from '../Partials/Step';
import Detail from '@/Pages/Guest/Confirm/Partials/Detail';
import FlightDetail from '../Partials/FlightDetail';
import { Ticket } from '@/types';

export default function Index({ ticket }: {ticket: Ticket}) {
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
                <Step level='confirm' />

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
                    <Detail />
                    <FlightDetail ticket={ticket} />
                </div>
            </form>
        </Layout>
    );
}
