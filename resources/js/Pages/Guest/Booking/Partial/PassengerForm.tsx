import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import InputError from '@/components/input-error';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function PassengerForm({ data, errors, setData }: { data: any, errors: any, setData: any }) {
    const [date, setDate] = useState<Date>()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6'>
            <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Passenger Detail</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Please be careful - Passenger details must match your passport or photo ID
                    </p>
                </header>
                <div className="mt-6 sm:space-y-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="first_name">First name</Label>
                        <Input
                            id="first_name"
                            className="mt-1 block w-full"
                            value={data.first_name}
                            onChange={(e) => setData('first_name', e.target.value)}
                            autoComplete="first_name"
                        />

                        <InputError message={errors.first_name} />
                    </div>
                    <div>
                        <Label htmlFor="last_name">Last name</Label>
                        <Input
                            id="last_name"
                            className="mt-1 block w-full"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            required
                            autoComplete="last_name"
                        />
                        <InputError message={errors.last_name} />
                    </div>
                    <div>
                        <Label htmlFor="phone_no">Phone No.</Label>
                        <div className="mt-1 block w-full">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal",
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
                        <InputError message={errors.phone_no} />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <div className="mt-1 block w-full">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        </div>
                        <InputError message={errors.email} />
                    </div>
                    <div>
                        <RadioGroup defaultValue="option-one" className='flex gap-4'>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Male" id="male" />
                                <Label htmlFor="male">Male</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Female" id="female" />
                                <Label htmlFor="female">Female</Label>
                            </div>
                        </RadioGroup>
                        <InputError message={errors.passenger?.gender} />
                    </div>
                </div>
            </section>
            <div>
            </div>
        </div>
    );
}
