import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Booking, Pagination } from "@/types";
import CustomPagination from "@/components/custom-pagination";
import { Badge } from "@/components/ui/badge";

export default function Listing({ booking }: { booking: Pagination<Booking> }) {
    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Booking Listing</h2>
            </header>
            <div className="mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Airline</TableHead>
                            <TableHead>Origin</TableHead>
                            <TableHead>Destination</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {booking.total < 1 &&
                            <TableRow>
                                <TableCell className="text-center" colSpan={7}>No data available!</TableCell>
                            </TableRow>
                        }
                        {
                            booking.data.map(booking => (
                                <TableRow key={booking.id}>
                                    <TableCell className="font-medium">{booking.first_name} {booking.last_name}</TableCell>
                                    <TableCell>{booking.ticket.flight.airline.name}</TableCell>
                                    <TableCell>{booking.ticket.origin.city.name}</TableCell>
                                    <TableCell>{booking.ticket.destination.city.name}</TableCell>
                                    <TableCell>{booking.email}</TableCell>
                                    <TableCell>{booking.phone_no}</TableCell>
                                    <TableCell>
                                        <Badge>{booking.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <CustomPagination
                    pagination={booking}
                    query=""
                />
            </div>
        </section>
    );
}
