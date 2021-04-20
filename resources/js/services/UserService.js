import UserAPI from "../api/UserAPI";


export const getUsers = () => {
    return UserAPI.getUsers()
    //do other stuff here like update store or show alert
}

export default { getUsers }
