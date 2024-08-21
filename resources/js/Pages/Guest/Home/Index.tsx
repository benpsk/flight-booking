import { Head } from '@inertiajs/react';
import Layout from '@/Pages/Guest/Partials/Layout';
import Hero from './Partial/Hero';
import { Input } from '@/components/ui/input';
import SelectFlight from './Partial/SelectFlight';
import { Button } from '@/components/ui/button';
import Date from './Partial/Date';
import Ticket from './Partial/Ticket';
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';

export default function Index() {
    const [date, setDate] = useState<Date>()
    return (
        <Layout>
            <Head title="Home" />
            <Hero />
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-full md:w-5/6 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="grid grid-cols-1 space-y-2 md:space-y-0 md:grid-cols-3 sm:gap-4">
                        <SelectFlight />
                        <SelectFlight />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] h-12 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? date.toString() : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button className="h-12 w-1/2" >Search</Button>
                    </div>
                </div>
                <div className="w-full md:w-5/6 space-y-4 my-6">
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </div>
            </div>
        </Layout>
    );
}
