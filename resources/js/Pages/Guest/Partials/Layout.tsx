import { PropsWithChildren } from 'react';
import Navigation from './Navigation';
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Layout({ children }: PropsWithChildren) {
    const { flash } = usePage<PageProps>().props
    return (
        <main className='bg-gray-100 min-h-screen'>
            <Navigation />
            <section className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 ' >
                {
                    flash.success &&
                    <Alert className='text-green-600 mb-2'>
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>
                            {flash.success}
                        </AlertDescription>
                    </Alert>
                }
                {
                    flash.error &&
                    <Alert variant="destructive" className='mb-2' >
                        <AlertTitle>Error!</AlertTitle>
                        <AlertDescription>
                            {flash.error}
                        </AlertDescription>
                    </Alert>
                }
                {children}
            </section>
        </main>
    );
}
