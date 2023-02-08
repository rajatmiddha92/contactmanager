import React from 'react';
import Header from './Header';
import "./TotalContacts.css"

const TotalContacts = () => {

    const array = [{ name: "aman", country: "india", add: "delhi", emai: "ama@gmail.com" },
    { name: "aman", country: "india", add: "delhi", emai: "ama@gmail.com" },
    { name: "aman", country: "india", add: "delhi", emai: "ama@gmail.com" },
    { name: "aman", country: "india", add: "delhi", emai: "ama@gmail.com" }]

    return (
        <div className='totalContact'>
            <Header />
            <h1>Users All contacts</h1>

            <table>
                <thead>

                </thead>
                <tbody>

                    {array.map((data, key) => {
                        return (<tr>
                            <td>{data.name}</td>
                            <td>{data.country}</td>
                            <td>{data.add}</td>
                            <td>{data.emai}</td>
                        </tr>)
                    })}

                </tbody>
            </table>




        </div>
    );
}

export default TotalContacts;