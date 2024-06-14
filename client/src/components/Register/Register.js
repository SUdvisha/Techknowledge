// import React from 'react'
// import {} from "../Register/Register.css"
// import {useForm} from 'react-hook-form'
// import { useNavigate,Link } from 'react-router-dom'
// import axios from 'axios'
// import {useState} from 'react'
// //  import { useEffect } from "react";
// function Register() {

//   let {register,handleSubmit,formState:{errors}}=useForm()
//   let [err,setErr]=useState("");
//   // let [state,setState]=useState(false);
//   // let [registerSuccess,setRegisterSuccess]=useState(false);
//   let navigate=useNavigate()
//   async function onRegisterFormSubmit(newUser){
//     if(newUser.userType==='user'){
//       let res=await axios.post('http://localhost:4000/user-api/user',newUser)
//       console.log(res)
//     if(res.data.message==='user created'){
//       navigate('/Login')
//     }else{
//       setErr(res.data.message)
//     }  
//     }
  
//   if(newUser.userType==='author'){
//     let res=await axios.post('http://localhost:4000/author-api/author',newUser)
//     console.log(res)
//     if(res.data.message==='author created'){
//       navigate('/Login')
//     }else{
//       setErr(res.data.message)
//     }  
//   }
// }
//   return (
//     <div className='abc'>
//       <div className=' p-3'>
//         <div className=' text-center m-5'>
//           <div className='de d-block mx-auto w-50 container rounded-5 pt-4 pb-4 shadow-lg mx-5 my-5'>
//             <h6 className="display-2 text-dark fw-semibold ">Register</h6>
//             {/* display user signup error message */}
//             {err.length!==0&&<p className="text-danger fs-3">{err}</p>}

//             <form className="w-50 mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
//               {/* Role selection radio buttons */}
//             <div className="mb-3">
//                 <br></br>
//               <div className="form-check form-check-inline fs-5">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   {...register("userType", { required: true })}
//                   value="author"
//                 />
//                 <label className="form-check-label">Author</label>
//               </div>
//               <div className="form-check form-check-inline fs-5">
//                 <input
//                   className="form-check-input"
//                   type="radio"
//                   {...register("userType", { required: true })}
//                   value="user"
//                 />
//                 <label className="form-check-label">User</label>
//               </div>
//               {errors.role?.type === 'required' && (
//                 <h5 className='mx-4 text-start text-danger'>Please select a role</h5>
//               )}
//             </div>
//             {/* username */}
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label"></label>
//               <input type="text" {...register("username",{required:true})} id="username" className="form-control fs-5" placeholder='Username' />
//             </div>
//             {errors.username?.type==='required' && <h5 className='mx-4 text-start text-danger'>Username is required</h5>}
//             {/* password */}
//             <div className="mb-3 ">
//               <label htmlFor="password" className="form-label"></label>
//               <input type="password" {...register("password",{required:true})} id="password" className="form-control fs-5 " placeholder='Password'/>
//             </div>
//             {errors.password?.type==='required' && <h5 className='mx-4 text-start text-danger'>Password is required</h5>}
//             {/* email */}
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label"></label>
//               <input type="email" {...register("email",{required:true})} id="email" className="form-control fs-5" placeholder='E-mail'/>
//             </div>
//             {errors.email?.type==='required' && <h5 className='mx-4 text-start text-danger'>Email is required</h5>}
//         <button type="submit" className="btn btn-dark fs-5 fw-medium m-3">Register</button>

//          <p className=' text-center fw-semibold fs-3'>
//           Already registered !!
//           <Link to='/login' className='fs-4 fw-semibold'><p className='lead  kh fw-medium'>Login Here!</p></Link>
//           </p>
//         </form>
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Register
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './Register.css'; // Import the CSS file

function Register() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  let [err, setErr] = useState("");
  let navigate = useNavigate();

  async function onRegisterFormSubmit(newUser) {
    console.log("Submitted newUser:", newUser); // Log the newUser object
    if (!newUser || !newUser.userType) {
      setErr("Invalid form submission.");
      return;
    }

    let res;
    try {
      if (newUser.userType === 'user') {
        res = await axios.post('http://localhost:4000/user-api/user', newUser);
      } else if (newUser.userType === 'author') {
        res = await axios.post('http://localhost:4000/author-api/author', newUser);
      } else {
        setErr("Invalid user type");
        return;
      }

      console.log(res);
      if (res.data.message === 'user created' || res.data.message === 'author created') {
        navigate('/Login');
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      setErr("An error occurred during registration. Please try again.");
    }
  }

  return (
    <div className='abc'>
      <div className='p-3'>
        <div className='text-center m-5'>
          <div className='de d-block mx-auto w-50 container rounded-5 pt-4 pb-4 shadow-lg mx-5 my-5'>
            <h6 className="display-2 text-dark fw-semibold">Register</h6>
            {/* Display user signup error message */}
            {err.length !== 0 && <p className="text-danger fs-3">{err}</p>}

            <form className="w-50 mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
              {/* Role selection radio buttons */}
              <div className="mb-3">
                <br />
                <div className="form-check form-check-inline fs-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    {...register("userType", { required: true })}
                    value="author"
                  />
                  <label className="form-check-label">Author</label>
                </div>
                <div className="form-check form-check-inline fs-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    {...register("userType", { required: true })}
                    value="user"
                  />
                  <label className="form-check-label">User</label>
                </div>
                {errors.userType && (
                  <h5 className='mx-4 text-start text-danger'>Please select a role</h5>
                )}
              </div>
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label"></label>
                <input type="text" {...register("username", { required: true })} id="username" className="form-control fs-5" placeholder='Username' />
              </div>
              {errors.username && <h5 className='mx-4 text-start text-danger'>Username is required</h5>}
              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label"></label>
                <input type="password" {...register("password", { required: true })} id="password" className="form-control fs-5" placeholder='Password' />
              </div>
              {errors.password && <h5 className='mx-4 text-start text-danger'>Password is required</h5>}
              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label"></label>
                <input type="email" {...register("email", { required: true })} id="email" className="form-control fs-5" placeholder='E-mail' />
              </div>
              {errors.email && <h5 className='mx-4 text-start text-danger'>Email is required</h5>}
              <button type="submit" className="btn btn-dark fs-5   fw-medium m-3">Register</button>

              <p className='text-center fw-semibold text-primary fs-3'>
                Already registered !!
                <Link to='/login' className='fs-4 fw-semibold'><p className='lead kh  text-primary fw-medium'>Login Here!</p></Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
