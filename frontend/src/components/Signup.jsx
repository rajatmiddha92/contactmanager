import React from 'react';
import {useNavigate} from 'react-router-dom'
const Signup =(props)=> {
    const navigate = useNavigate()
    return (
      <React.Fragment>
       Hi i am from sign up 
       <div>
                    <button onClick={()=>navigate('/')}>Go to log</button>
                </div>
      </React.Fragment>
    );
}

export default Signup;