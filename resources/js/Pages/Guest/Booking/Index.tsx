import { Head, useForm } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import { FormEventHandler } from 'react';
import ContactForm from '@/Pages/Guest/Booking/Partials/ContactForm';
import PassengerForm from '@/Pages/Guest/Booking/Partials/PassengerForm';
import { Button } from '@/components/ui/button';
import Step from '../Partials/Step';
import FlightDetail from '../Partials/FlightDetail';
import { Country, Ticket } from '@/types';

export default function Index({ ticket, countries }: { ticket: Ticket, countries: Country[] }) {
    const { data, setData, post, errors, processing, transform } = useForm({
        ticket_id: ticket.id,
        first_name: '',
        last_name: '',
        phone_no: '',
        email: '',
        passenger_gender: '',
        passenger_first_name: '',
        passenger_last_name: '',
        passenger_dob: '',
        passenger_country_id: '',
    });
    transform((data) => ({
        ...data,
        passenger: {
            gender: data.passenger_gender,
            first_name: data.passenger_first_name,
            last_name: data.passenger_last_name,
            dob: data.passenger_dob,
            country_id: data.passenger_country_id
        }
    }))
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('bookings.store'));
    };
    return (
        <Layout>
            <Head title="Booking" />
            <form onSubmit={submit} className='flex flex-col gap-3 sm:gap-6'>
                <Step level="booking" />
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
                    <ContactForm data={data} setData={setData} errors={errors} />
                    <FlightDetail ticket={ticket} />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
                    <PassengerForm
                        countries={countries}
                        data={data}
                        setData={setData}
                        errors={errors}
                    />
                    <div></div>
                </div>
                <div className="">
                    <Button disabled={processing}>Continue</Button>
                </div>
            </form>
        </Layout>
    );
}
