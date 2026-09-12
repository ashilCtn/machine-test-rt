function BookingSummary({ selectedRoom, nights, totalPrice, error, onBook, isBooked }) {
  return (
    <div className="bg-white border border-slate-300 rounded overflow-hidden">
      <div className="bg-[#1e3a5f] text-white font-semibold text-xs px-3 py-1.5">
        Booking Summary
      </div>
      <div className="p-3 text-xs">
        {error && <p className="text-red-600 mb-1.5">{error}</p>}
        {isBooked && <p className="text-green-700 mb-1.5">Booking Successful</p>}

        {selectedRoom && (
          <p>
            <strong>Room:</strong> {selectedRoom.code} - {selectedRoom.type}
          </p>
        )}

        <p><strong>Nights:</strong> {nights}</p>
        <p className="text-sm"><strong>Total:</strong> ₹{totalPrice.toLocaleString("en-IN")}</p>

        <button
          onClick={onBook}
          className="w-full mt-2 bg-[#1e3a5f] text-white rounded py-1.5"
        >
          Check Booking
        </button>
      </div>
    </div>
  );
}

export default BookingSummary;