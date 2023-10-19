import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function Delete() {
    const{pk}=useParams();

    const redirect=useNavigate();

    const[user,setuser]=useState({});

    async function fetchuser()
    {
        const result = await axios.get(`http://127.0.0.1:8000/v1/student/${pk}/`);
        setuser(result.data);
    }

    function delconf()
    {
        axios.delete(`http://127.0.0.1:8000/v1/students/${pk}/`);
        redirect('/show')
    }
    useState(()=>{fetchuser()},[])

  return (
    <>
    <center>
        <h1>DELETE CONFORMATION</h1>
        <h4>are you want dalete this data?</h4>
        <button onClick={()=>(delconf())} className='btn btn-danger'>YES</button>
        <NavLink to={'/show'} ><button className='btn btn-warning'>NO</button></NavLink>
    </center>
    </>
  )
}