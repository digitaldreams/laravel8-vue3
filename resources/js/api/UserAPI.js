import axios from "axios";

export const getUsers = async () => {
    const data = (await axios.get('/api/users')).data.data

    //map data if needed

    return data
}

export default { getUsers }
