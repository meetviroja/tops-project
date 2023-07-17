import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Navbar from "./comcomponent/Navbar";
import "../components/Concat.css"
const Apifatching2 = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments').then((result) => {
            result.json().then((resp) => {
                setdata(resp)
            })
        })


    }, []);
    console.log(data);
    return (
        <>
            <Navbar />
            <h1>api data</h1>
            <table border="2px solid black" width="90%" className="border">
                <tr>
                    <td>postId</td>
                    <td>id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>body</td>
                </tr>
                {
                    data.map((item) =>
                        <tr>
                            <td>{item.postId}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                            <td><button>edit</button></td>
                            <td><button>delet</button></td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}
export default Apifatching2;