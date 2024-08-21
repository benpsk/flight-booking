import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated';
import { Booking, Pagination } from '@/types';
import Listing from './Partials/Listing';

export default function Dashboard({booking}: {booking: Pagination<Booking>}) {
    return (
        <Authenticated>
            <Head title="Admin Booking" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <Listing booking={booking} />
                </div>
            </div>
        </Authenticated>
    );
}
