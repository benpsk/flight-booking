import { Config } from 'ziggy-js';

export interface Airport {
    id: string,
    name: string,
    city_id: string,
    city: City
}
export interface City {
    id: string,
    name: string,
    country_id: string,
    country: Country
}
export interface Ticket {
    id: string,
    origin_id: string,
    destination_id: string,
    flight_id: string,
    date: string,
    fee: string,
    number_of_seat: number,
    available_seat: number,
    departure_time: string,
    arrival_time: string,
    origin: Airport,
    destination: Airport,
    flight: Flight,
}
export interface Flight {
    id: string,
    name: string,
    number: string,
    airline_id: string,
    airline: Airline,
}
export interface Airline {
    id: string,
    name: string
}
export interface Country {
    id: string,
    name: string
}
export interface Booking {
    id: string,
    ticket_id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_no: string,
    ticket: Ticket,
    passengers: Passenger[],
}
export interface Passenger {
    id: string,
    booking_id: string,
    first_name: string,
    last_name: string,
    dob: string,
    gender: string,
    country_id: string,
    country: Country
}
export interface User {
    id: string;
    name: string;
    email: string;
    email_verified_at: string;
    avatar: string
}
export interface Flash {
    success: string,
    error: string
}
export interface Auth {
    user: User;
    guard: string,
}
export interface MenuItem {
    href: string;
    active: string;
    label: string;
    isNested: boolean;
    ul?: MenuItem[];
    open?: string[];
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: Auth,
    ziggy: Config & { location: string };
    flash: Flash
};
