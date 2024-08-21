import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';
import { Airport } from "@/types"

interface FormProps {
    value: string,
    dataKey: string,
    setData: (key: string, value: string) => void;
    airports: Airport[],
    label: string,
}

export default function SelectFlight({ value, dataKey, setData, airports, label }: FormProps) {
    const [open, setOpen] = useState(false)
    const selectedAirport = airports.find((airport) => airport.id == value);
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-12"
                >
                    {selectedAirport
                        ? <span>{selectedAirport.name}, <span className="text-teal-600">{selectedAirport.city.name}</span></span>
                        : label}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350]px p-0">
                <Command>
                    <CommandInput placeholder="Search flight..." />
                    <CommandList>
                        <CommandEmpty>No flight found.</CommandEmpty>
                        <CommandGroup>
                            {airports.map((airport) => (
                                <CommandItem
                                    key={airport.id}
                                    value={`${airport.id}`}
                                    onSelect={(currentValue) => {
                                        setData(`${dataKey}`, currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value == airport.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                        {airport.name}, <span className="text-teal-600 ml-1">{airport.city.name}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
