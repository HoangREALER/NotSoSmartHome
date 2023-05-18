import instance from ".";

const lightOn = async (speed) => {
    ret = []
    await instance(`/light/on`, {
        method: "GET",
        params: {
            speed: speed
        }
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('on'))
                console.log(`Light turned on`)
            else
                throw 'Light turn on failed'
        }
        else {
            throw 'Light turn on failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const lightOff = async () => {
    ret = []
    await instance(`/light/off`, {
        method: "GET",
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('off'))
                console.log(`Light turned off`)
            else
                throw 'Light turn off failed'
        }
        else {
            throw 'Light turn off failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

export {
    lightOn,
    lightOff
}