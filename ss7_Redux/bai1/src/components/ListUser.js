import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteUser, getAllUser} from "../redux/action/User";
import Swal from "sweetalert2";

export function ListUser() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const findAll = async () => {
        dispatch(getAllUser())
    }
    useEffect(() => {
        // findAll()
    }, [])


    const deleteUserId = async (id) => {
        await dispatch(deleteUser(id))
        Swal.fire({
            icon: "success",
            title: "Xoá thành công",
            timer: "2000"
        })
        findAll()
    }
    const Sweetalert = async (id, name) => {
        Swal.fire({
            icon: "warning",
            title: `Bạn có muốn xoá tên <span>${name}</span> này không ?`,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Oke"
        })
            .then((res) => {
                if (res.isConfirmed) {
                    deleteUserId(id)
                }
            })
    }
    return (
        <>
            <h1 className="text-center">USER LIST</h1>
            <a className="btn btn-success m-3" onClick={() => findAll()}>Get List</a>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.map((list) => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.email}</td>
                        <td>{list.website}</td>
                        <td><a onClick={() => Sweetalert(`${list.id}`, `${list.name}`)}
                               className="btn btn-danger">Delete</a></td>
                        {/*onClick={() => deleteUserId(list.id)}*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}