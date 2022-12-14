import React from 'react';

import { fetchLogin, fetchRegister } from '../../store/features/authSlice';

import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [username, setUsername] = React.useState("");

    const [password, setPassword] = React.useState("");

    const dispatch = useDispatch();

    const token = useSelector(state=>state.auth.token)


    const getUsername = (evt) => {
        setUsername(evt.target.value);
    }
    const getPassword = (evt) => {

        setPassword(evt.target.value);
    }


    const login = () => {

        dispatch(fetchLogin({
            'username': username,
            'password': password,
        }))


    }

    React.useEffect(()=>{

    },[])
    return (

        <>
            <div className="container-fluid text-center mb-2 text-bg-danger">
                <h1>Login Page</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label className="form-label"> User Name</label>
                            <input type="text" className="form-control" onChange={getUsername} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Password</label>
                            <input type="text" className="form-control" onChange={getPassword} />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success" onClick={login}>Login</button>
                        </div>
                        <p>token:{token}</p>
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
