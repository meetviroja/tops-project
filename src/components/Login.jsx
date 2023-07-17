import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Navbar from './comcomponent/Navbar';
import "../components/Login.css"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [username, setusername] = useState("")
  const [Password, setPassword] = useState("")

  const Prosedlogin = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("prosed");
      fetch("http://localhost:3000/user?username=" + username).then((res) => {
        return res.json();
        // console.log(res);
      }).then((resp) => {
        console.log(resp[0]);
        if (resp[0].role == 1) {
          sessionStorage.setItem('username', username)
          navigate("/admin")
        } else {
          sessionStorage.setItem('username', username)
          navigate("/")
        }
      }).catch((err) => {
        console.log("login fail" + err);
      });
    }
  }

  const validate = () => {
    let result = true
    if (username === "") {
      result = false
      alert("enter username")
    }
    if (Password === "") {
      result = false
      alert("enter Password")
    }
    return result
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <MDBContainer fluid className="p-3 my-5 h-custom">

          <MDBRow>

            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
            </MDBCol>

            <MDBCol col='4' md='6'>

              <div className="d-flex flex-row align-items-center justify-content-center">

                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating size='md' tag='a' className='me-2'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              <form onSubmit={Prosedlogin}>
                <MDBInput wrapperClass='mb-4'
                  value={username} onChange={e => setusername(e.target.value)}
                  label='username' id='formControlLg' type='text' size="lg" />
                <MDBInput wrapperClass='mb-4'
                  value={Password} onChange={e => setPassword(e.target.value)}
                  label='Password' id='formControlLg' type='password' size="lg" />

                <div className="d-flex justify-content-between mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <div className='text-center   text-md-start mt-4 pt-2'>
                  <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
                  <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to="/Register">register</Link></p>
                </div>
              </form>

            </MDBCol>

          </MDBRow>


        </MDBContainer>
      </div>
    </>
  );
}

export default Login;