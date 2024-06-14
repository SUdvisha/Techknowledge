import React from 'react';
import { Link ,NavLink } from 'react-router-dom';
import './sidebar.css';
import { useSelector } from 'react-redux';

function Sidebar() {
  let {currentUser}=useSelector(state=>state.userAuthorLoginReducer)

  return (
    <div className="sidebar">
      <ul>
        {/* <li><Link to="edit">Edit Profile</Link></li> */}
        <li><NavLink to={`articles/${currentUser.username}`}> Suggested by Me</NavLink></li>
        <li><Link to="favourites">Favourites</Link></li>
        

        <li><Link to="add-article">Add Courses</Link></li>
        <li><Link to="article">All Courses</Link></li>


      </ul>
    </div>
  );
}

export default Sidebar;
