# Secure Flight Search and Booking system 

# database structure 

# countries table 
- id, name,

# cities table 
- id , name, country_id

# airports table 
- id, name, city_id

# airlines table 
- id, name, [MNA, Air KBZ]

# flights table 
- id, name, number, airline_id, 

# tickets table 
- id, from, to, number_of_seat, class, date, available_seat, departure time, arrival time
- from [origin_id], to [destination_id]
- airport_id => airport_id, flight_id

# bookings table 
- id, ticket_id, name, email, phone

# passengers table 
- id, name, passport, booking_id,

# users table 
- login, can see his bookings

# admin table 
- see all of the bookings 
- create tickets and airlines,


# UI 
- home page 
  - input origin  => airport_id 
  - input destination => airport_id 
  - input travel date => check within the tickets 
  - search btn
- display result 
  - show the ticket and flights informations
- select booking 
  - fill up the contact details 
  - fill up the passenger information

- save booking for auth user

