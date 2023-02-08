import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import dontsPic from './images/Group 100.png'
import { Link } from 'react-router-dom';
const Login = (props) => {
    const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:5500/login', data)
            .then(result => {
                console.log(result)
            }).catch((e) => {
                console.log(e)
            })

    }


    return (
        <React.Fragment>
            <main className='container border d-flex justify-content-center align-items-center p-3 overflow-hidden'>
                <div className='left-round'></div>
                <section className='row container border m-5 br-5 rounded-2'>
                    <div className="col">
                        <div className='row d-flex flex-row justify-content-end'>
                            <img src={dontsPic} style={{ width: "15%", height: "15%", margin: "1.5em"}} alt="dots" />
                        </div>
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-8 border d-flex align-items-center justify-content-center" style={{ "text-align": "center" }}>
                                <div className="row">

                                    <div className="col">
                                        <div className="row">
                                            <h1>Logo</h1>
                                            <p>Enter your credentials to access your account</p>
                                            <div className="row d-flex justify-content-around align-items-center h-100">
                                                <div className="col-lg-10">
                                                    <form onSubmit={handleSubmit}>
                                                        <input className='form-control m-2 px-3' type='email' name="email" placeholder='User Id' required onChange={(e) => setData({ ...data, email: e.target.value })} />
                                                        <input className='form-control m-2 px-3' type="password" name='password' placeholder='Password' required onChange={(e) => setData({ ...data, password: e.target.value })} />
                                                        <button type="button" className='btn btn-primary'>Sign Un</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-flex flex-row justify-content-start'>
                            <img src={dontsPic} style={{ width: "15%", height: "15%", margin: "1.5em"}} alt="dots" />
                        </div>
                        </div>
                    </div>
                </section>
                <div className='right-round'></div>
            </main>
        </React.Fragment>
    );
}

export default Login;