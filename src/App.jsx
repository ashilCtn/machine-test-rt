import { useState } from "react";
import { rooms } from "./data/rooms";
import {
  getNumberOfNights,
  getTotalPrice,
  isRoomBooked,
} from "./utils/booking";
import DateSelector from "./components/DateSelector";
import RoomCard from "./components/RoomCard";
import BookingSummary from "./components/BookingSummary";
import { bookings } from "./data/bookings";
import { filterRooms } from "./utils/filter";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [error, setError] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [guests, setGuests] = useState(1);

  const filteredRooms = filterRooms(guests);

  const handleCheckInChange = (value) => {
    setCheckIn(value);
    setError("");
    setIsBooked(false);
    setSelectedRoom(null);
  };

  const handleCheckOutChange = (value) => {
    setCheckOut(value);
    setError("");
    setIsBooked(false);
    setSelectedRoom(null);
  };

  const handleRoomSelect = (room) => {
    if (!checkIn || !checkOut) {
      setError("Please select check-in and check-out dates first.");
      return;
    }

    if (isRoomBooked(room.code, checkIn, checkOut, bookings)) {
      setError("Room is already booked for the selected dates.");
      return;
    }

    setSelectedRoom(room);
    setError("");
    setIsBooked(false);
  };


  const validateBooking = () => {
    if (!checkIn)
      return setError("Please select a check-in date."), false;

    if (!checkOut)
      return setError("Please select a check-out date."), false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkInDate < today)
      return setError("Check-in date cannot be in the past."), false;

    if (checkOutDate <= checkInDate)
      return setError("Check-out date must be after check-in date."), false;

    if (!selectedRoom)
      return setError("Please select a room."), false;

    if (isRoomBooked(selectedRoom.code, checkIn, checkOut, bookings)) {
      return setError(
        "Room is already booked for the selected dates."
      ), false;
    }

    return true;
  };

  

  const handleBooking = () => {
    if (!validateBooking()) {
      setIsBooked(false);
      return;
    }

    setError("");
    setIsBooked(true);
    setSelectedRoom(null);
    setCheckIn("");
    setCheckOut("");
  };

  let nights = 0;
  let totalPrice = 0;

  if (
    checkIn &&
    checkOut &&
    selectedRoom &&
    new Date(checkOut) > new Date(checkIn)
  ) {
    nights = getNumberOfNights(checkIn, checkOut);
    totalPrice = getTotalPrice(nights, selectedRoom.price);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#eef1f6] text-sm">
      <div className="bg-[#1e3a5f] text-white px-4 py-2.5">
        <h1 className="text-base font-semibold">
          Hotel Room Booking
        </h1>
      </div>

      <div className="flex flex-1 gap-3 p-3">
        <div className="flex flex-col gap-3 flex-1">

          <DateSelector
            checkIn={checkIn}
            checkOut={checkOut}
            onCheckInChange={handleCheckInChange}
            onCheckOutChange={handleCheckOutChange}
          />

          <div className="bg-white border border-slate-300 rounded overflow-hidden">
            <div className="flex justify-between items-center bg-[#1e3a5f] text-white font-semibold text-xs px-3 py-1.5">
              Available Rooms

              <div className="bg-white border border-slate-300 rounded p-3 text-[#1e3a5f]">
                <label className="font-semibold mr-2">
                  Guests:
                </label>

                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="border border-slate-300 rounded px-2 py-1"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
            </div>

            <div className="p-3 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
              {filteredRooms.map((room) => (
                <RoomCard
                  key={room.code}
                  room={room}
                  isSelected={selectedRoom?.code === room.code}
                  onSelect={handleRoomSelect}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-60">
          <BookingSummary
            selectedRoom={selectedRoom}
            nights={nights}
            totalPrice={totalPrice}
            error={error}
            onBook={handleBooking}
            isBooked={isBooked}
          />
        </div>
      </div>
    </div>
  );
}

export default App;