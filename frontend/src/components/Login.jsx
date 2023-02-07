import React from 'react';
import {useNavigate} from 'react-router-dom'
const Login =(props)=> {
    const navigate = useNavigate()
    return (
        <React.Fragment>
                <div>
                    Hello from Login
                    <button onClick={()=>navigate('/signup')}>Go to sign up</button>
                </div>
        </React.Fragment>
    );
}

export default Login;