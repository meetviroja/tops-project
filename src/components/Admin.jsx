import React, { useEffect } from 'react';
import Navbar from './comcomponent/Navbar';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate()

    useEffect(() => {
        let username = sessionStorage.getItem('username')
        if (username === "" || username === null) {
            console.log("done");
            navigate('/Login')
        }
    }, [])

    return (
        <>
            < Navbar />
            <h1>you are in admin</h1>
        </>
    );
};

export default Admin;