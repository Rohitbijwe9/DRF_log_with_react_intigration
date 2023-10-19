import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Add() {

  const{register,handleSubmit}=useForm();
  const redirect=useNavigate();


  function add(data)
  {
    axios.post('http://127.0.0.1:8000/v1/student/',data)
    redirect('/show')
    
  }

  
  
  return (
   <>
   <form onSubmit={handleSubmit(add)}>
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
