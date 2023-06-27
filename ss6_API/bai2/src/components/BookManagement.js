import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as bookService from '../services/BookService';

import Swal from "sweetalert2";

export function BookManagement() {
    const [book, setBook] = useState([])
    const fetchApi = async () => {
        const result = await bookService.showList();
        setBook(result)
    }
    useEffect(() => {
        fetchApi()
    }, [])

    const deleteBook = async (id) => {
        await bookService.deleteBook(id)
        Swal.fire({
            icon: "success",
            title: "Xoá thành công",
            timer: "2000"
        })
        fetchApi()
    }
    const deleteBooks = async (id, title) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to remove the date name " + " " + title + " " + "?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    deleteBook(id),
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <>
            <Link to="/create" className="btn btn-success m-3">Create</Link>
            <h1 className="text-center">Book Management</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th style={{width: "10%"}}>ID</th>
                    <th className="text-center">Title</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {book.map((list) => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td className="text-center">{list.title}</td>
                        <td className="text-center">{list.quantity}</td>
                        <td className="text-center">
                            <a className="btn btn-danger"
                               onClick={() => deleteBooks(`${list.id}`, `${list.title}`)}>Delete</a>
                            {/*onClick={() => handleDelete(book.id)}*/}
                            <Link to={`/update/${list.id}`} className="btn btn-warning"
                                  style={{marginLeft: "2%"}}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}