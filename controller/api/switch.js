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
            if (res.data.includes('testing'))
                console.log(`Mode turned on`)
            else
                throw 'Mode turn on failed'
        }
        else {
            throw 'Mode turn on failed'
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
            if (res.data.includes('testing'))
                console.log(`Mode turned off`)
            else
                throw 'Mode turn off failed'
        }
        else {
            throw 'Mode turn off failed'
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