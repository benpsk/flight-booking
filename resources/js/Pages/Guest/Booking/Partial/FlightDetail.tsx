import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { diffForHuman } from "@/lib/utils";
import { Ticket } from "@/types";
import { MoveRight } from "lucide-react";

export default function FlightDetail({ ticket }: { ticket: Ticket }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <header className='bg-teal-600 text-white text-center p-8 sm:rounded-t-lg'>
                <p className="flex justify-center gap-2">
                    {ticket.origin.city.name}
                    <MoveRight />
                    {ticket.destination.city.name}
                </p>
                <p>{ticket.date}</p>
            </header>
            <div className='p-4 sm:p-6'>
                <p className="flex gap-2">
                    {ticket.origin.name}
                    <MoveRight />
                    {ticket.destination.name}
                </p>
                <div className='flex items-center gap-2 my-4'>
                    <Avatar className='w-16 h-16' >
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{ticket.flight.airline.name}</p>
                </div>
                <div className="flex gap-2">
                    <p>{ticket.date},</p>
                    <p className="text-teal-600">{ticket.departure_time} - {ticket.arrival_time}, </p>
                    <p>{diffForHuman(ticket.departure_time, ticket.arrival_time)}</p>
                </div>
            </div>
        </div>
    );
}
