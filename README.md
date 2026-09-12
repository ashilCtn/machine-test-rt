# Hotel Room Booking

A simple hotel room booking interface built as part of a front-end coding test.

The application allows users to select check-in and check-out dates, choose a hotel room, calculate the number of nights and total price, and validate booking details.

## Features

* Display hotel rooms with room type, price, and maximum guest capacity
* Select check-in and check-out dates
* Select a hotel room
* Calculate the number of nights automatically
* Calculate the total booking price
* Validate check-in and check-out dates
* Prevent check-in dates in the past
* Prevent same-day or invalid date ranges
* Check whether a room is already booked for the selected dates
* Display clear validation and booking messages
* Clean and responsive user interface

## Sample Rooms

| Room Code | Room Type       | Price / Night | Max Guests |
| --------- | --------------- | ------------: | ---------: |
| R101      | Deluxe Room     |        ₹3,500 |          2 |
| R102      | Deluxe Room     |        ₹3,500 |          2 |
| R201      | Executive Suite |        ₹5,800 |          3 |
| R202      | Executive Suite |        ₹5,800 |          3 |
| R301      | Family Room     |        ₹4,200 |          4 |

## Tech Stack

* React
* JavaScript
* Vite
* Tailwind CSS

No backend or database is used. Room and booking data are hardcoded for this coding test.

## Project Structure

```text
src/
├── components/
│   ├── BookingSummary.jsx
│   ├── DateSelector.jsx
│   └── RoomCard.jsx
├── data/
│   ├── bookings.js
│   └── rooms.js
├── utils/
│   └── booking.js
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Validation

The application validates:

* Check-in date cannot be in the past
* Check-out date must be after check-in date
* Same-day check-in and check-out are not allowed
* A room must be selected before booking
* Already-booked rooms cannot be booked for overlapping dates

## Improvements With More Time

If more time were available, I would consider:

* Add a max-guests filter
* Add unit tests for booking and price calculations
* Add more comprehensive booking availability handling
* Store room and booking data using a backend/database
* Improve accessibility and user feedback

## Notes

This project was created as a coding-test submission. The focus was on correct booking logic, date validation, readable code structure, and a simple usable interface.
