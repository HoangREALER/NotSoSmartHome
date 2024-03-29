import instance from ".";

const modeOn = async (speed) => {
    ret = []
    await instance(`/mode/on`, {
        method: "GET",
        params: {
            speed: speed
        }
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('on'))
                console.log(`Mode turned to manual`)
            else
                throw 'Mode turned to manual failed'
        }
        else {
            throw 'Mode turned to manual failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const modeOff = async () => {
    ret = []
    await instance(`/mode/off`, {
        method: "GET",
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('off'))
                console.log(`Mode turned to auto`)
            else
                throw 'Mode turned to auto failed'
        }
        else {
            throw 'Mode turned to auto failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

export {
    modeOn,
    modeOff
}