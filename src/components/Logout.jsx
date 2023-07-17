import React, { useState } from 'react';
import { useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [lomsg , setLomsg] = useState("Are you sure?")
    const Navigate = useNavigate()
    const hendleclick = () =>{
        sessionStorage.clear("username")
        alert("Thank you for visiting")
        Navigate("/")
    }
    // useEffect(() => {
    //     // console.log("called");
    //     sessionStorage.clear("username")
    // }, []);
    return ( 
        <>
          <div>
            <h1>{lomsg}</h1>
            <MDBBtn className="mb-4 w-10" size="lg" onClick={hendleclick}>Log Out</MDBBtn>
          </div>
        </>
     );
}
 
export default Logout;