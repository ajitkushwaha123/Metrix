import React, { useState } from 'react'
import { metrix } from '../assets'
import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Register = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const userRegister = [{
    name : name,
    email : email,
    password : password,
  }]
  const register = (e) => {
      e.preventDefault();
      console.log(userRegister);
  }


  return (
    <div className='w-[full] font-poppins flex h-screen justify-center items-center'>
    <form onSubmit={register}>
      <div className='w-[433px] py-[40px] bg-white rounded-xl '>
         <div className='flex justify-center items-center flex-col'>
            <img width={"60px"} src={metrix}/>
            <h3 className='pt-[15px] font-semibold text-[20px]'>Welcome back!</h3>
            <p className='pb-[40px] pt-[5px]'>Register to your account</p>
         </div>

         <div className='w-[full] flex flex-col justify-center items-center'>
            <div className='flex rounded-lg text-[18px] mb-[20px] justify-center items-center bg-[#EFF1F9] w-[375px] h-[52px]'> 
              <CiUser />
              <input onChange={(e) => setName(e.target.value)} className='w-[303px] ml-[10px] h-[36px] outline-none bg-[#EFF1F9]' placeholder='Full Name' type='text'/>
            </div>

            <div className='flex rounded-lg text-[18px] justify-center items-center bg-[#EFF1F9] w-[375px] h-[52px]'> 
              <IoMailOutline />
              <input onChange={(e) => setEmail(e.target.value)} className='w-[303px] ml-[10px] h-[36px] outline-none bg-[#EFF1F9]' placeholder='Email Address' type='email'/>
            </div>

            <div className='flex rounded-lg my-[20px] text-[18px] justify-center items-center bg-[#EFF1F9] w-[375px] h-[52px]'> 
              <CiLock />
              <input onChange={(e) => setPassword(e.target.value)} className='w-[303px] ml-[10px] h-[36px] outline-none bg-[#EFF1F9]' placeholder='Password' type='password'/>
            </div>
         </div>

         <p className='text-primary flex justify-end items-center px-[40px]'>Recover Password</p>
          <div className='flex justify-center items-center flex-col'>
              <p className='py-[15px]'>Already have an account ? <NavLink to={'/login'}><span className='text-primary'> Login </span></NavLink>  </p>
              <button className='bg-primary px-[20px] py-2 mt-[20px] rounded-md text-white text-[18px]'>Register</button>
          </div>
      </div>
      </form>
    </div>
  )
}

export default Register
