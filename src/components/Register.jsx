import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
// import HeaderCompo from './commonCompo/header';
import { useNavigate } from 'react-router-dom';
import Navbar from './comcomponent/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';


function Register() {
    const [username, setId] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()


    const hendlesubmit = (e) => {
        e.preventDefault()
        let data = { username, email, password, role: "2" }
        // console.log(data);
        if (validate()) {

            console.log("done");
            fetch("http://localhost:3000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log("done");
                navigate('/login');
            }).catch((err) => {
                console.log("error");
            })
        }

    }
    const validate = () => {
        let result = true
        if (username === "") {
            result = false
            alert("enter a username")
        }
        if (password === "") {
            result = false
            alert("enter a pasword")
        }
        if (email === "") {
            result = false
            alert("enter a pasword")
        }
        return result
    }
    return (
        <>
            {/* <HeaderCompo /> */}
            <Navbar />
            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                <form onSubmit={hendlesubmit}>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={username}
                                            onChange={e => setId(e.target.value)}
                                            label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            label='Your Email' id='form2' type='email' />
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            label='Password' id='form3' type='password' />
                                    </div>
                                    <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
                                </form>
                                <p className="small fw-bold mt-2 pt-1 mb-2">you have an account? <Link to="/login">login</Link></p>
                            </MDBCol>
                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >
        </>
    );
}

export default Register;