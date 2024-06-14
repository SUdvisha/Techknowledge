import React from 'react';
import { Form, NavLink } from 'react-router-dom';
import 'C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/NavBar/NavBar.css';
import logoT from 'C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/images/logotech.png';
import {useSelector,useDispatch} from 'react-redux'
import {resetState} from '../../redux/slices/userAuthorSlice'


function NavBar() {
  let {loginUserStatus,errorOccured,errMsg,currentUser}=useSelector((state)=>state.userAuthorLoginReducer);
  let dispatch=useDispatch();
  function LogOut(){
    localStorage.removeItem('token')
    dispatch(resetState())

  }
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('AboutUs');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('ContactUs');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w">
      <nav className='navbar w bg-gradient d-flex justify-content-between'>
        <img src={logoT} alt='' className='image mx-3 m-1'/>
        <ul className="nav justify-content-end fs-3 p-2">
        {loginUserStatus===false?(
    <>

          <li className="nav-item">
            <NavLink className="nav-link text-light fw-semibold" to='/'>Home</NavLink>
          </li>
          <li className='nav-item'>
            <button className='nav-link ppp text-light fw-semibold' onClick={scrollToAbout}>About Us</button>
          </li>
          <li className='nav-item'>
            <button className='nav-link ppp text-light fw-semibold' onClick={scrollToContact}>Contact Us</button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light fw-semibold" to='/Register'>Register</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light fw-semibold" to='/Login'>Login</NavLink>
          </li></>):(
            <li className="nav-item">
            <span className="lead fs-3 me-3 fw-1"  style={{fontWeight:'bold',fontSize:'1.3rem',textTransform:'capitalize',fontFamily:'fantasy'}}>{currentUser.username}
            <sup style={{color:'var(--dark-green)',fontSize:'1rem'}}>({currentUser.userType})</sup>
            </span> 
         <NavLink
           className="nav-link lead fs-3 me-3 fw-1"
           to="Login"
           style={{ color: "var(--light-grey)" }}
           onClick={LogOut}
         >--LogOut
         </NavLink>
       </li>
       )}
       
          
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
