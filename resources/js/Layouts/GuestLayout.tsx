import ApplicationLogo from '@/components/application-logo';
import { PropsWithChildren, ReactNode } from 'react';
import { Link } from "@inertiajs/react";

export default function Guest({ children, title, width = 'sm:max-w-md' }: PropsWithChildren<{ title: ReactNode, width?: string }>) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <Link href="/">
                <ApplicationLogo className="h-14 fill-current text-teal-600" />
            </Link>
            <h1 className='text-xl font-bold mt-4'> {title} </h1>
            <div className={`w-full ${width} my-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg`} >
                {children}
            </div>
        </div>
    );
}
