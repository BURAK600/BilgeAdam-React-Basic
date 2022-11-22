import React from 'react';
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

/**
 * "username": "", "password": "", "email": "", "admincode": ""
 */

import { fetchRegister } from '../../store/features/authSlice';

import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [admincode, setAdmincode] = React.useState("");

    const dispatch = useDispatch();


    const getUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const getPassword = (evt) => {

        setPassword(evt.target.value);
    }

    const getEmail = (evt) => {

        setEmail(evt.target.value);
    }

    const getAdmincode = (evt) => {

        setAdmincode(evt.target.value);
    }


    const register = () => {

        dispatch(fetchRegister({
            'username': username,
            'password': password,
            'email': email,
            'admincode': admincode
        }))


    }

    return(

        <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput onChange={getUsername} label='Username' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={getEmail} label='Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput  onChange={getAdmincode} label='Admincode' id='form1' type='text' className='w-100'/>
              </div>


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput onChange={getPassword} label='Password' id='form3' type='password'/>
              </div>
	
              <MDBBtn className='mb-4' size='lg' onClick={register}>Register</MDBBtn>
              
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
            
          </MDBRow>
        </MDBCardBody>
      </MDBCard>



      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />

    </MDBContainer>
    ); 
}

export default Register;
