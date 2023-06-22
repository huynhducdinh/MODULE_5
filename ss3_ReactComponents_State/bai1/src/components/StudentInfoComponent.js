import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export class StudentInfoComponent extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: "1",
                    name: "Huỳnh Đức Định",
                    age: "21",
                    address: "Đại Lộc, Quảng Nam"
                },
                {
                    id: "2",
                    name: "Đỗ Thành Nhân",
                    age: "21",
                    address: "Đà nẵng"
                },
                {
                    id: "3",
                    name: "Hồ Viễn",
                    age: "21",
                    address: "Huế"
                }
            ]
        }
    }

    render() {
        return (
            <>
                <h2 className="text-center mt-5 mb-4"> List Student</h2>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((student,index) => (
                        <tr key={index.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}