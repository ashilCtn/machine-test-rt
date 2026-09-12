export const getNumberOfNights = (checkIn, checkOut) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const difference = end - start;

  return difference / (1000 * 60 * 60 * 24);
};

export const getTotalPrice = (nights, pricePerNight) => {
  return nights * pricePerNight;
};

export const isRoomBooked = (roomCode, checkIn, checkOut, bookings) => {
  return bookings.some((booking) => {
    if (booking.roomCode !== roomCode) {
      return false;
    }

    const existingCheckIn = new Date(booking.checkIn);
    const existingCheckOut = new Date(booking.checkOut);

    const selectedCheckIn = new Date(checkIn);
    const selectedCheckOut = new Date(checkOut);

    return (
      selectedCheckIn < existingCheckOut &&
      selectedCheckOut > existingCheckIn
    );
  });
};

