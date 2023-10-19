import React from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';


export default function Update() {
    const{pk} = useParams();

    const redirect = useNavigate();

    const{register,handleSubmit,setValue} = useForm({});

    async function fetchdata()
    {
        const result = await axios.get(`http://localhost:8000/v1/student/${pk}/`);
        setValue('fname', result.data.fname)
        setValue('lname', result.data.lname)
        setValue('gender', result.data.gender)
        setValue('address', result.data.address)
        setValue('contact', result.data.contact)
        setValue('city', result.data.dob)

    }

    function saveupdated(data)
    {
        axios.put(`http://localhost:8000/v1/students/${pk}/`,data)
        redirect('/show');

    }

    useEffect(()=>{fetchdata()},[])
  return (
   <>
    <form onSubmit={handleSubmit(saveupdated)}>
    <label>ENTER FIRST NAME</label><br/><br/>
    <input type='text' className='form-control' placeholder='enter f name'
    {...register('fname')}/><br/><br/>

    <label>ENTER LAST NAME</label><br/><br/>
    <input type='text' className='form-control' placeholder='enter l name'
    {...register('lname')}/><br/><br/>

    <label htmlFor='g' >CHOOSE GENDER</label><br/><br/>
    <label>Male</label>
    <input type='radio'  id='g'
    {...register('gender')} value={'male'}/><br/>
    

    <label>Female</label>
    <input type='radio' value='female' id='g'
    {...register('gender')}  /><br/>
    
    <label>Other</label>
    <input type='radio' value='Other' id='g'
    {...register('other')}/><br/><br/>

    <label>ENTER ADDRESS</label><br/><br/>
    <input type='text' className='form-control' placeholder='enter address'
    {...register('address')}/><br/><br/>

  <label>ENTER CONTACT NO</label><br/><br/>
    <input type='number' className='form-control' placeholder='enter contact number'
    {...register('contact')}/><br/><br/>

  <label>ENTER CITY</label><br/><br/>
    <input type='text' className='form-control' placeholder='enter address'
    {...register('city')}/><br/><br/>


    <input type='submit' value={'ADD DATA'} className='btn btn-outline-success'/>







    
    






   </form>


   </>
  )
}
