const rooms = [
    {
        id: 0,
        name: "Favourites",
        reference_id: 3
    },
    {
        id: 1,
        name: "Kitchen",
        room_type: 0, // 0 for common room, 1 for personal
        temparature: 32, // Celcius
        humidity: 30, // percent
        luminance: 12 // lux
    },
    {
        id: 2,
        name: "Living Room",
        room_type: 0,
        temparature: 27,
        humidity: 38,
        luminance: 12 // lux
    },
    {
        id: 3,
        name: "Bedroom",
        room_type: 1,
        temparature: 25,
        humidity: 35,
        luminance: 12 // lux
    },
    {
        id: 4,
        name: "John's room",
        room_type: 1,
        temparature: 26,
        humidity: 25,
        luminance: 12 // lux
    },
    {
        id: 5,
        name: "Mary's room",
        room_type: 1,
        temparature: 27,
        humidity: 30,
        luminance: 12 // lux
    },
    {
        id: 6,
        name: "Bathroom",
        room_type: 0,
        temparature: 30,
        humidity: 80,
        luminance: 12 // lux
    }
]

export {
    rooms
};