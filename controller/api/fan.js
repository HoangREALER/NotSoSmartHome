import instance from ".";

const fanOn = async (speed) => {
    ret = []
    await instance(`/fan/on`, {
        method: "GET",
        params: {
            speed: speed
        }
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('on'))
                console.log(`Fan turned on, speed = ${speed} %`)
            else
                throw 'Fan turn on failed'
        }
        else {
            throw 'Fan turn on failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const fanOff = async () => {
    ret = []
    await instance(`/fan/off`, {
        method: "GET",
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('off'))
                console.log(`Fan turned off`)
            else
                throw 'Fan turn off failed'
        }
        else {
            throw 'Fan turn off failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

export {
    fanOn,
    fanOff
}