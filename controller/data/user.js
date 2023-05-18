import instance from "../api";

const login = async (username) => {
    try {
        const response = await instance(`/user/${username}`,{
            method: "GET",
        })
        return response
    } catch (error) {
        return error
    }
}

export { login };