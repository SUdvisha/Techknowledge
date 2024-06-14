import "./UserProfile.css";
import { NavLink, Outlet } from "react-router-dom";

function UserProfile() {
  return (
    <>
     <NavLink to='article' className='fs-4 text-primary mr-5 pl-3 nav-link articlesss mt-4'>ClickHere!!! to visit courses suggested</NavLink>
      <Outlet />
    </>
  );
}

export default UserProfile;