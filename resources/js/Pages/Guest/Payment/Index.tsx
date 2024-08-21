import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import { FormEventHandler } from 'react';
import { Button } from '@/components/ui/button';
import Step from '../Partials/Step';
import Detail from '@/Pages/Guest/Payment/Partials/Detail';
import PaymentForm from '@/Pages/Guest/Payment/Partials/PaymentForm';
import { Booking } from '@/types';
import FlightDetail from '../Partials/FlightDetail';

export default function Index({ booking }: {booking: Booking}) {
    const { data, setData, post, errors, processing } = useForm({
        booking_id: booking.id,
        card_holder_name: '',
        card_no: '',
        expiry_date: '',
        cvc: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('payments.store'), { preserveScroll: true});
    };
    return (
        <Layout>
            <Head title="Payment" />
            <form onSubmit={submit} className='flex flex-col gap-3 sm:gap-6'>
                <Step level='payment' />
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
                    <Detail booking={booking} />
                    <FlightDetail ticket={booking.ticket} />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
                    <PaymentForm data={data} setData={setData} errors={errors} />
                    <div></div>
                </div>
                <div className="">
                    <Button disabled={processing}>Pay Now</Button>
                </div>
            </form>
        </Layout>
    );
}
