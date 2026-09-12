function DateSelector({ checkIn, checkOut, onCheckInChange, onCheckOutChange }) {
  return (
    <div className="bg-white border border-slate-300 rounded overflow-hidden">
      <div className="bg-[#1e3a5f] text-white font-semibold text-xs px-3 py-1.5">
        Select Dates
      </div>
      <div className="p-3 flex gap-4">
        <div>
          <label className="block text-xs text-slate-600 mb-0.5">Check-in</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => onCheckInChange(e.target.value)}
            className="border border-slate-300 rounded px-1.5 py-0.5 text-xs"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-600 mb-0.5">Check-out</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => onCheckOutChange(e.target.value)}
            className="border border-slate-300 rounded px-1.5 py-0.5 text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default DateSelector;