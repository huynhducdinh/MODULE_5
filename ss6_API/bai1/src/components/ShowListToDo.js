import {useEffect, useState} from "react";
import * as todoListService from "../service/ToDoService";
import {Link} from "react-router-dom";

export function ShowListToDo() {
    const [todo, setTodo] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await todoListService.findAll();
            setTodo(result);
        }
        fetchApi();
    })
    return (
        <>
            <Link to="/create" className="btn btn-success mt-3 m-4">Thêm mới</Link>
            <h1 className="text-center"> Todo List</h1>
            <table className="table table-hover ">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {todo.map((listTodo) => (
                    <tr key={listTodo.id}>
                        <td>{listTodo.id}</td>
                        <td>{listTodo.title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}