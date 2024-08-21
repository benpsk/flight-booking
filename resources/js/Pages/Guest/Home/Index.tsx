import { Head, useForm, usePage } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import Hero from '@/Pages/Guest/Home/Partials/Hero';
import SelectFlight from '@/Pages/Guest/Home/Partials/SelectFlight';
import { Button } from '@/components/ui/button';
import Ticket from '@/Pages/Guest/Home/Partials/Ticket';
import { FormEventHandler } from 'react';
import { Airport, Ticket as TicketType } from '@/types';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';

interface DataType {
    origin_id: string,
    destination_id: string,
    date: string
}

export default function Index({ airports, tickets, is_filter }: { airports: Airport[], tickets: TicketType[], is_filter: boolean }) {
    const { data, setData, post, processing, errors } = useForm<DataType>({
        origin_id: '',
        destination_id: '',
        date: '',
    })
    const submit: FormEventHandler = (e) => {
        e.preventDefault()
        post(route('filter'), { preserveState: true, preserveScroll: true });
    }
    const origins = airports.filter(airport => airport.id != data.destination_id);
    const destinations = airports.filter(airport => airport.id != data.origin_id);
    return (
        <Layout>
            <Head title="Home" />
            <Hero />
            <div className="flex flex-col items-center justify-center gap-4">
                <form onSubmit={submit} className="w-full md:w-5/6 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="grid grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 sm:gap-4">
                        <div>
                            <SelectFlight
                                value={data.origin_id}
                                dataKey="origin_id"
                                setData={setData}
                                airports={origins} label="Flying from" />
                            <InputError message={errors.origin_id} />
                        </div>
                        <div>
                            <SelectFlight
                                value={data.destination_id}
                                dataKey="destination_id"
                                setData={setData}
                                airports={destinations} label="Flying to"
                            />
                            <InputError message={errors.destination_id} />
                        </div>
                        <div>
                            <Input
                                id="date"
                                type='date'
                                className="block w-full h-12"
                                value={data.date}
                                onChange={(e) => setData('date', e.target.value)}
                            />
                            <InputError message={errors.date} />
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button className="h-12 w-1/2" disabled={processing} >Search</Button>
                    </div>
                </form>
                <div className="w-full md:w-5/6 space-y-4 my-6">
                    {
                        (is_filter && tickets.length == 0) && (
                            <div className='flex justify-center'>No fight available!</div>
                        )
                    }
                    {
                        tickets.map(ticket => (
                            <Ticket key={ticket.id} ticket={ticket} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
}
