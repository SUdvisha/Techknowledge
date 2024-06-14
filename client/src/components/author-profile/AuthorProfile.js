import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/sidebar';
import './AuthorProfile.css';

function AuthorProfile() {
  const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);

  return (
    <div className="author-profile">
      <Sidebar />
      
     
        <Outlet />
      </div>
   
  );
}

export default AuthorProfile;
