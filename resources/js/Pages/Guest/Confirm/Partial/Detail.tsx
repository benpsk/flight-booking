import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CircleCheckBig } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Link } from "@inertiajs/react";

export default function Detail() {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 ">
                    <CircleCheckBig className="w-24 h-24 text-teal-600" />
                    <p>Payment Confirm!</p>
                </div>
                <div className="mt-6">
                    <Link href={route('home')}>
                        <Button>Home</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
