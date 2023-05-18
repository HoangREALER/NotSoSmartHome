import instance from ".";

const musicOn = async (speed) => {
    ret = []
    await instance(`/music/on`, {
        method: "GET",
        params: {
            speed: speed
        }
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('on'))
                console.log(`music turned on`)
            else
                throw 'music turn on failed'
        }
        else {
            throw 'music turn on failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const musicOff = async () => {
    ret = []
    await instance(`/music/off`, {
        method: "GET",
    })
    .then((res) => {
        if (res.status === 200) {
            if (res.data.includes('off'))
                console.log(`music turned off`)
            else
                throw 'music turn off failed'
        }
        else {
            throw 'music turn off failed'
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

export {
    musicOn,
    musicOff
}