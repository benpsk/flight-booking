import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, MoveRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Ticket() {
    return (
        <Link href={route('booking')} className="grid grid-cols-1 sm:grid-cols-3 justify-between p-4 sm:p-8 bg-white gap-4 shadow sm:rounded-lg transform transition-transform duration-300 hover:scale-105">
            <div className='flex items-center gap-2 '>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Name</p>
            </div>
            <div className='flex items-center justify-center gap-2 '>
                <div>
                    <p className='text-md font-bold'>12:00</p>
                    <p>BKK</p>
                </div>
                <div className='flex flex-col items-center mx-4'>
                    <MoveRight />
                    <p>1hr 15m</p>
                </div>
                <div>
                    <p className='text-md font-bold'>12:00</p>
                    <p>BKK</p>
                </div>
            </div>
            <div className='flex justify-end items-center gap-2 '>
                <p className='text-md font-bold'>THB 10000</p>
                <ChevronDown className='hover:text-gray-700' />
            </div>
        </Link>
    );
}
