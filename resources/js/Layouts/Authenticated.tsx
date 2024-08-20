import { PropsWithChildren, useEffect } from 'react';
import { PageProps } from '@/types';
import SideMenu from './Partials/SideMenu';
import { useToast } from "@/components/ui/use-toast"
import { usePage } from '@inertiajs/react';
import { Toaster } from "@/components/ui/toaster"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export default function Authenticated({ children }: PropsWithChildren) {
    const { toast, dismiss } = useToast();
    const { flash, auth } = usePage<PageProps>().props;
    useEffect(() => {
        if (flash.success) {
            toast({
                className: "bg-teal-600 text-white",
                title: "Success!",
                description: flash.success,
            });
        }
        if (flash.error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: flash.error,
            });
        }
        if (!flash.success && !flash.error) dismiss();
    }, [flash])
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
            <div className="fixed w-0 md:w-64 h-full ">
                <SideMenu auth={auth} />
            </div>
            <Toaster />

            <main className='flex-1 ml-0 md:ml-64 overflow-y-auto '>
                <Sheet>
                    <SheetTrigger className="fixed md:hidden rounded-full bg-gray-200 ms-2 p-2 text-teal-600">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left" className='w-64 p-0'>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription>
                            </SheetDescription>
                        </SheetHeader>
                        <SideMenu auth={auth} />
                    </SheetContent>
                </Sheet>
                <section className="py-8">
                    {children}
                </section>
            </main>
        </div>
    );
}
