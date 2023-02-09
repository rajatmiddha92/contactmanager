import React from 'react';
import "./TotalContacts.css"
import Header from './Header/Header';
import Functionalities from './Functionalities/Functionalities';
import editimage from "./../images/Edit.png";
import deleteimage from "./../images/delete.png";
import sort from "./../images/sorting.png"
import columnDevide from "./../images/columnDevide.png"


const TotalContacts = () => {

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
                    <td>check</td>
                    <td scope="col">Name</td>
                    <td scope="col">Designation</td>
                    <td scope="col">Company</td>
                    <td scope="col">Industry</td>
                    <td scope="col">Email</td>
                    <td scope="col">Phone Number</td>
                    <td scope="col">Counrty</td>
                    <td scope="col">Action</td>    
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
                                    <img src={editimage} alt="edit" />
                                </div>
                                <div>
                                    <img src={deleteimage} alt="delete" />
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