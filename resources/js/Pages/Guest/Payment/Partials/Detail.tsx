import { Booking } from "@/types";

export default function Detail({ booking }: { booking: Booking }) {
    return (
        <section className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg col-span-2">
            <div>
                <header className="my-2">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Contact details</h2>
                </header>
                <div className="mb-4">
                    <p>{booking.first_name} {booking.last_name}</p>
                    <p>{booking.email}</p>
                    <p>{booking.phone_no}</p>
                </div>
            </div>
            <div>
                <header className="my-2">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Passenger details</h2>
                </header>
                <div>
                    {
                        booking.passengers.map(passenger =>
                            <p key={passenger.id}>{passenger.first_name}  {passenger.last_name}</p>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
