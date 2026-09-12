    import { rooms } from '../data/rooms.js'

    export const filterRooms = (maxGuests) => {
        return rooms.filter(room => room.maxGuests === maxGuests )
    }