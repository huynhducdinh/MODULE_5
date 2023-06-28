import {userService} from "../../service/UserService";
import {DELETE_USER, GET_ALL_USER} from "./Type";

export const getAllUser = () => async (dispatch) => {
    try {
        const result = await userService.findAll();
        dispatch({
            type: GET_ALL_USER,
            payload: result.data
        })
    } catch (e) {
        console.log(e)
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        await userService.deleteUser(id);
        dispatch({
            type: DELETE_USER
        })
    } catch (e) {
        console.log(e)
    }

}