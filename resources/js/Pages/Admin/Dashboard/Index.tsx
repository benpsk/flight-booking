import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated';
import { BadgeCheck, CircleCheck, CircleDotDashed, CircleX, ListCheck } from 'lucide-react';

export default function Dashboard() {
    return (
        <Authenticated>
            <Head title="Admin Dashboard" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <header className='mb-4'>
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Overview </h2>
                    </header>
                    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <article className="flex items-end justify-between rounded-lg shadow-lg border  bg-white p-4 transform transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <span className="hidden rounded-full bg-gray-100 p-2 text-teal-600 sm:block">
                                    <BadgeCheck />
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">Booking</p>
                                    <p className="text-2xl font-medium text-gray-900">1000</p>
                                </div>
                            </div>
                            <p className="rounded bg-gray-100 p-1 text-teal-600">100%</p>
                        </article>
                        <article className="flex items-end justify-between rounded-lg shadow-lg border  bg-white p-4 transform transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <span className="hidden rounded-full bg-gray-100 p-2 text-teal-600 sm:block">
                                    <BadgeCheck />
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">Booking</p>
                                    <p className="text-2xl font-medium text-gray-900">1000</p>
                                </div>
                            </div>
                            <p className="rounded bg-gray-100 p-1 text-teal-600">100%</p>
                        </article>
                        <article className="flex items-end justify-between rounded-lg shadow-lg border  bg-white p-4 transform transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <span className="hidden rounded-full bg-gray-100 p-2 text-teal-600 sm:block">
                                    <BadgeCheck />
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">Booking</p>
                                    <p className="text-2xl font-medium text-gray-900">1000</p>
                                </div>
                            </div>
                            <p className="rounded bg-gray-100 p-1 text-teal-600">100%</p>
                        </article>
                        <article className="flex items-end justify-between rounded-lg shadow-lg border  bg-white p-4 transform transition-transform duration-300 hover:scale-105">
                            <div className="flex items-center gap-4">
                                <span className="hidden rounded-full bg-gray-100 p-2 text-teal-600 sm:block">
                                    <BadgeCheck />
                                </span>
                                <div>
                                    <p className="text-sm text-gray-500">Booking</p>
                                    <p className="text-2xl font-medium text-gray-900">1000</p>
                                </div>
                            </div>
                            <p className="rounded bg-gray-100 p-1 text-teal-600">100%</p>
                        </article>
                    </section>
                </div>
            </div>
        </Authenticated>
    );
}
