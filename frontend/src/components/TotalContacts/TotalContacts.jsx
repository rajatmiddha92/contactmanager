import React, { useState } from 'react';
import "./TotalContacts.css"
import Header from './Header/Header';
import Functionalities from './Functionalities/Functionalities';
import editimage from "./../images/Edit.png";
import deleteimage from "./../images/delete.png";
import { useEffect } from 'react';
// import sort from "./../images/sorting.png"
// import columnDevide from "./../images/columnDevide.png"


const TotalContacts = () => {

    const [arr, setArr] = useState([])

    useEffect( async ()=>{

        try{
            const response = await fetch("http://localhost:5500/allcontact")
        } catch(e){
            console.log(e)
        }
    })

    const array = [
    { name: "aman", designation: "manager", company: "delhi", Industry: "it", Email: "ama@gmail.com", Phone_Number: "523665", Country: "india", Action: "action" },
    { name: "aman", designation: "operation", company: "delhi", Industry: "it", Email: "ama@gmail.com", Phone_Number: "523665", Country: "india", Action: "action" },
    { name: "aman", designation: "system", company: "delhi", Industry: "it", Email: "ama@gmail.com", Phone_Number: "523665", Country: "india", Action: "action" },
    { name: "aman", designation: "jkhb", company: "delhi", Industry: "it", Email: "ama@gmail.com", Phone_Number: "523665", Country: "india", Action: "action" }]

    return (
        <div className='totalContact'>
            <Header />
            <Functionalities />

            {/* TABLE POPULATION OF CONTACTS  */}

            <table class="table table-striped" selecttable>
            <thead className='thead'>
                <tr>
                    <th>check</th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Company</th>
                    <th scope="col">Industry</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Counrty</th>
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
                {array.map((data, key) => {
                    return (<tr>
                        <td></td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.company}</td>
                        <td>{data.Industry}</td>
                        <td>{data.Email}</td>
                        <td>{data.Phone_Number}</td>
                        <td>{data.Country}</td>
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