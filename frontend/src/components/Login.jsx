import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
// import {Checkbox, Grid, TextField, FormControlLabel, Paper, Button} from '@mui/material';
import './login.css';
import dontsPic from'./images/Group 100.png'
import { Link } from 'react-router-dom';
const Login =(props)=> {
    const navigate = useNavigate()
    const [data, setData] = useState({email:"",password:""}) 
    const handleSubmit=async(e)=>{
        e.preventDefault()
         axios.post('http://localhost:5500/login', data)
         .then(result=>{
            console.log(result)
         }).catch((e)=>{
            console.log(e)
         }) 
         
    }
    
    
    return (
        <React.Fragment>
            <main className='main-container'>
                <div className='left-round'></div>
                <section className='form-container'>
                    <div className='cards left-card'>
                        <img src={dontsPic} style={{width:"150px", height:"150px", margin:"1.5em"}} alt="dots"/>
                    </div>
                    <div className="form-label cards">
                        <h1>Logo</h1>
                        <p>Enter your credentials to access your account</p>
                        <form onSubmit={handleSubmit}>
                            <input className='form-card' type='email' name="email" placeholder='User Id' required onChange={(e)=>setData({...data, email:e.target.value})}/>
                            <input  className='form-card' type="password" name='password' placeholder='Password' required onChange={(e)=>setData({...data, email:e.target.value})}/>
                            <button className='form-card btn-signIn'>Sign In</button>
                            
                        </form>
                        <button className='form-card btn-signUp'><Link id='link' to={'/signup'}>Sign Un</Link></button>
                    </div>
                    <div className='cards right-card'>
                        <img src={dontsPic} style={{width:"150px", height:"150px", margin:"1.5em"}} alt="dots"/>
                    </div>
                </section>
                <div className='right-round'></div>
            </main>
        </React.Fragment>
    );
}

export default Login;