import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated';

export default function Dashboard() {
    return (
        <Authenticated>
            <Head title="User Dashboard" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    User Dashboard
                </div>
            </div>
        </Authenticated>
    );
}
