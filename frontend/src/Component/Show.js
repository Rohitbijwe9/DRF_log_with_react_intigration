import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Show() {
    const[user,setuser]=useState([]);

    const redirect=useNavigate()

    async function fetchdata()
    {
        const result=await axios.get('http://127.0.0.1:8000/v1/student/')
        setuser(result.data)
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>
    <table className='table table-stipped'>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Contact</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                user.map(obj=>{return(
                    <tr>
                        <td>{obj.fname}</td>
                        <td>{obj.lname}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.address}</td>
                        <td>{obj.contact}</td>
                        <td>{obj.city}</td>
                        <td>
                           <NavLink to={`/update/${obj.id}/`}> <button className='btn btn-warning'>UPDATE</button></NavLink>
                           <NavLink to={`/delete/${obj.id}/`}><button className='btn btn-danger'>DELETE</button></NavLink>

                        </td>






                    </tr>
                )})
            }
        </tbody>
    </table>
    </>
  )
}
