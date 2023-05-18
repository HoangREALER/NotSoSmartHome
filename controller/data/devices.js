import instance from "../api"

let device = [
    // {
    //     id: 5,
    //     name: "Bedroom's MP3",
    //     last_start_time: "19:43:10 2023-04-07",
    //     used_time: 9812,
    //     state: 1,
    //     capacity: 80,
    //     room_id: 3,
    //     type: 2,
    //     song: 'Bước qua mùa cô đơn',
    //     artist: 'Vũ.',
    //     duration: 279, 
    //     volume: 40 // percent
    // },
]


const getDevices = async (user_id) => {
    await instance(`/user/${user_id}/devices`, {
        method: "GET"
    })
    .then(async (res) => {
        if (res.status === 200) {
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].dev_type === 'Light')
                {
                    let lights = await getLightDetails(res.data[index].id)
                    let data = {
                        id: res.data[index].id,
                        name: res.data[index].name,
                        state: lights[0].light_state === "00" ? 0 : 1,
                        room_id: 3,
                        type: 0,
                        brightness: lights[0].brightness,
                        color: lights[0].color
                    }
                    device.push(data)
                }
                else if (res.data[index].dev_type === 'Fan')
                {
                    let fans = await getFanDetails(res.data[index].id)
                    let data = {
                        id: res.data[index].id,
                        name: res.data[index].name,
                        state: fans[0].fan_state === "OFF" ? 0 : 1,
                        room_id: 3,
                        type: 1,
                        rpm: fans[0].rpm,
                        temperature: fans[0].temperature
                    }
                    device.push(data)
                }
                else if (res.data[index].dev_type === 'MusicPlayer')
                {
                    let music_player = await getMusicPlayerDetails(res.data[index].id)
                    let data = {
                        id: res.data[index].id,
                        name: res.data[index].name,
                        state: music_player[0].music_player_state === "0" ? 0 : 1,
                        room_id: 3,
                        type: 2,
                        song: 'Bước qua mùa cô đơn',
                        artist: 'Vũ.',
                        duration: 279, 
                        volume: 40
                    }
                    device.push(data)
                }
                else if (res.data[index].dev_type === 'Switch')
                {
                    let sensor = await getSensorDetails();
                    let switc = await getSwitchDetails(res.data[index].id)
                    let data = {
                        id: res.data[index].id,
                        name: res.data[index].name,
                        state: switc[0].switch_state === "000" ? 0 : 1,
                        room_id: 3,
                        type: 3,
                        temperature: parseFloat(sensor[0]),
                        humidity: parseFloat(sensor[1]),
                        lux: parseFloat(sensor[2]),
                    }
                    device.push(data)
                }
            }
            device = device.filter((a, i) => device.findIndex((s) => a.id === s.id) === i)
            console.log(device)
        }
        else if (res.status === 404) {
            throw "Not Found"
        }
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        
    })
}

const getLightDetails = async (dev_id) => {
    lights = []
    await instance(`/light`, {
        method: "GET"
    })
    .then((res) => {
        if (res.status === 200) {
            lights = res.data.filter(a => a.device_id === dev_id)
        }
    })
    return lights
}

const getFanDetails = async (dev_id) => {
    fans = []
    await instance(`/fan`, {
        method: "GET"
    })
    .then((res) => {
        if (res.status === 200) {
            fans = res.data.filter(a => a.device_id === dev_id)
        }
    })
    return fans
}

const getSensorDetails = async () => {
    ret = []
    await instance(`/sensor`, {
        method: "GET"
    })
    .then((res) => {
        if (res.status === 200) {
            ret = res.data
        }
    })
    return ret
}

const getMusicPlayerDetails = async (dev_id) => {
    ret = []
    await instance(`/music_player`, {
        method: "GET"
    })
    .then((res) => {
        if (res.status === 200) {
            ret = res.data.filter(a => a.device_id === dev_id)
        }
    })
    return ret
}

const getSwitchDetails = async (dev_id) => {
    ret = []
    await instance(`/mode`, {
        method: "GET"
    })
    .then((res) => {
        if (res.status === 200) {
            ret = res.data.filter(a => a.device_id === dev_id)
        }
    })
    return ret
}

const changeState = (id) => {
    const obj = device.filter(a => a.id === id)[0]
    if (obj.state === 0) {
        obj.state = 1
    } else {
        obj.state = 0
    }
}

export {
    device,
    changeState,
    getDevices
};