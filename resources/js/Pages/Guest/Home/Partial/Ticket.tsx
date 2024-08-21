import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, MoveRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Ticket as TicketType } from "@/types";
import { diffForHuman } from "@/lib/utils";

export default function Ticket({ ticket } : { ticket: TicketType }) {
    return (
        <Link href={route('bookings.show', ticket.id)} className="grid grid-cols-1 md:grid-cols-3 justify-between p-4 sm:p-8 bg-white gap-4 shadow sm:rounded-lg transform transition-transform duration-300 hover:scale-105">
            <div className='flex items-center gap-2 '>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>{ticket.flight.airline.name}</p>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div>
                    <p className='text-md font-bold'>{ticket.departure_time}</p>
                    <p className="lg:whitespace-nowrap">{ticket.origin.city.name}</p>
                </div>
                <div className='flex flex-col items-center mx-4'>
                    <MoveRight />
                    <p className="lg:whitespace-nowrap">{ diffForHuman(ticket.departure_time, ticket.arrival_time) }</p>
                </div>
                <div>
                    <p className='text-md font-bold'>{ticket.arrival_time}</p>
                    <p className="lg:whitespace-nowrap">{ticket.destination.city.name}</p>
                </div>
            </div>
            <div className='flex justify-end items-center gap-2 '>
                <p className='text-md font-bold'>{ ticket.fee}</p>
                <ChevronDown className='hover:text-gray-700' />
            </div>
        </Link>
    );
}
