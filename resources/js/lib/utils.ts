import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { parse, differenceInMinutes } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function diffForHuman(from: string, to: string) {
    const date1 = parse(from, 'HH:mm', new Date());
    const date2 = parse(to, 'HH:mm', new Date());
    const diffInMinutes = differenceInMinutes(date2, date1);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    return `${hours}hr ${minutes}m`;
}
