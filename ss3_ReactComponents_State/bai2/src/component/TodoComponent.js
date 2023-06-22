import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export class TodoComponent extends Component {
    constructor() {
        super();
        this.state = {
            textField: "",
            textFieldList: ['Chuyện Nhà Nông']
        }
    }

    inputTitle(value) {
        this.setState({
            textField: value
        })
    }

    add() {
        this.setState({
            textFieldList: [this.state.textField, ...this.state.textFieldList],
            textField: ""
        })
    }

    render() {
        return (
            <>
                <div className="text-center">
                <h1 className="mb-4 mt-5  text-center">Todo List</h1>
                <div className="m-5 ">
                <input value={this.state.textField} onChange={event => this.inputTitle(event.target.value)} placeholder="nhập tiêu đề" className=""/>
                <button onClick={() => this.add()} className="btn- btn-info">Add</button>
            </div>
                <table className="table-bordered mb-4 mt-5  justify-content-center text-center m-auto">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Tiêu đề</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.textFieldList.map((list, index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{list}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
                </div>
            </>
        )
    }
}