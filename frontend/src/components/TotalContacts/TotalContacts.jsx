import React, { useState } from 'react';
import "./TotalContacts.css"
import axios from 'axios';
import Header from './Header/Header';
import Functionalities from './Functionalities/Functionalities';
import editimage from "./../images/Edit.png";
import deleteimage from "./../images/delete.png";
import { useEffect } from 'react';
// import sort from "./../images/sorting.png"
// import columnDevide from "./../images/columnDevide.png"


const TotalContacts = () => {

    const [arr, setArr] = useState([])
    const userId = JSON.parse(localStorage.getItem("userdetails"))._id
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        const fetchData=async()=>{
        let result=await axios.get(`http://localhost:5500/allcontact/${userId}`,{
            headers:{
                "Authorization":token
            }
        })
        setArr(result.data.contacts)
        }
        fetchData()
    },[arr])

    

    return (
        <div className='totalContact'>
            <Header />
            <Functionalities />

            {/* TABLE POPULATION OF CONTACTS  */}

            <table className="table table-striped">
            <thead className='thead'>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Company</th>
                    <th scope="col">Industry</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Country</th>
                    <th scope="col">Action</th>    
                </tr>
            </thead>

            {/* <thead className='thead'>
                <tr>
                    <td className='abcd'>Checkbox</td>
                    <td scope="col" className='abcd'>
                        <p>Name</p>
                        <img  src={columnDevide} alt="columnDevide" />
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Designation</p>
                        <div className='div-sort'>
                            <img className='image-sort' src={sort} alt="sort" />
                            <img  src={columnDevide} alt="columnDevide" />
                        </div>
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Company</p>
                        <div className='div-sort'>
                            <img className='image-sort' src={sort} alt="sort" />
                            <img  src={columnDevide} alt="columnDevide" />
                        </div>
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Industry</p>
                        <div className='div-sort'>
                            <img className='image-sort' src={sort} alt="sort" />
                            <img  src={columnDevide} alt="columnDevide" />
                        </div>
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Email</p>
                        <img  src={columnDevide} alt="columnDevide" />
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Phone Number</p>
                        <img  src={columnDevide} alt="columnDevide" />
                    </td>
                    <td scope="col"  className='abcd'>
                        <p>Country</p>
                        <img  src={columnDevide} alt="columnDevide" />
                    </td>
                    <td scope="col" className='abcd'>Action</td>    
                </tr>
            </thead> */}


            <tbody>    
                {arr.map((data, key) => {
                    return (<tr key={key}>
                        <td><input type="check" /></td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.company}</td>
                        <td>{data.industry}</td>
                        <td>{data.email}</td>
                        <td>{data.phonenumber}</td>
                        <td>{data.category}</td>
                        <td>
                            <div className='tableaction'>
                                <div className='table-row-edit'>
                                    <button>
                                        <img src={editimage} alt="edit" />
                                    </button>
                                </div>
                                <div>
                                    <button>
                                        <img src={deleteimage} alt="delete" />
                                    </button>
                                </div>
                            </div>
                        </td>
                    </tr>)
                })}
            </tbody>
            </table>

        </div>
    );
}

export default TotalContacts;
