import { Head } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import Hero from './Partial/Hero';
import { Input } from '@/components/ui/input';
import SelectFlight from './Partial/SelectFlight';
import { Button } from '@/components/ui/button';

export default function Index() {
    return (
        <Layout>
            <Head title="Home" />
            <Hero />
            <div className="flex justify-center">
                <div className="w-full md:w-5/6 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="grid grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 sm:gap-4">
                        <SelectFlight />
                        <SelectFlight />
                        <Input type="date" className="h-12" />
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button className="h-12 w-1/2" >Search</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
