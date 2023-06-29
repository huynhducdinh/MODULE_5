import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CovidEpidemicInformation({covid}) {
    return (
        <>
                <h1 className="text-center mt-5">Vietnam's COVID Information</h1>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {covid.map((list) => (
                    <tr>
                        <td>{list.Date}</td>
                        <td>{list.Confirmed}</td>
                        <td>{list.Active}</td>
                        <td>{list.Recovered}</td>
                        <td>{list.Deaths}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/covid")
    return {
        props: {
            covid: res.data
        }
    }
}
