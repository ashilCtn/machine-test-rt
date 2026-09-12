function RoomCard({ room, isSelected, onSelect }) {
  return (
    <div
      className={`border rounded p-2.5 text-center ${
  isSelected ? "border-[#1e3a5f] bg-[#eef3f9]" : "border-slate-300 bg-slate-50"
} transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg hover:z-10 will-change-transform`}
    >
      <h3 className="text-xs font-semibold mb-1">{room.code}</h3>
      <p className="text-xs text-slate-500">{room.type}</p>
      <p className="text-xs font-semibold my-1">₹{room.price.toLocaleString("en-IN")} / night</p>
      <p className="text-xs text-slate-500">Max guests: {room.maxGuests}</p>
      <button
        onClick={() => onSelect(room)}
        className={`mt-1.5 text-white text-xs rounded px-2.5 py-1 ${
          isSelected ? "bg-green-700" : "bg-[#1e3a5f]"
        }`}
      >
        {isSelected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default RoomCard;