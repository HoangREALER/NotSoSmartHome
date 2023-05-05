const device = [
    {
        id: 0,
        name: "Bedroom's Lamp",
        last_start_time: "12:20:48 2023-04-07",
        used_time: 12345, // secodes
        state: 1, // 1 for on, 0 for off
        capacity: 80, // percent
        room_id: 3,
        type: 0, // 0 for light, 1 for fan, 2 for music device
        brightness: 20, // lux
        color: "#FFFFFF"
    },
    {
        id: 1,
        name: "Bedroom's Fan",
        last_start_time: "12:20:48 2023-04-07",
        used_time: 12345,
        state: 0,
        capacity: 80,
        room_id: 3,
        type: 1,
        rpm: 27,
    },
    {
        id: 2,
        name: "Bedroom's MP3",
        last_start_time: "19:43:10 2023-04-07",
        used_time: 9812,
        state: 1,
        capacity: 80,
        room_id: 3,
        type: 2,
        song: 'Bước qua mùa cô đơn',
        artist: 'Vũ.',
        duration: 279, 
        volume: 40 // percent
    },
]

export {
    device
};