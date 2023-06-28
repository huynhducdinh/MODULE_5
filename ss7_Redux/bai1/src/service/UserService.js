import requset from '../components/HttpComponents';

const findAll = () => {
    return requset.get('/user')
}
const deleteUser = (id) => {
    return requset.delete("/user/" + id)
}
export const userService = {
    findAll,
    deleteUser
}
