import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

function AuthorHome() {
    const { currentUser } = useSelector((state) => state.userAuthorLoginReducer);
    return (
        <div className="content welcome-message">
            <h2>Welcome, {currentUser.username}!</h2>
            <p className='align-center show fs-5 p-3 mr-4'>
                In this feature, users have the capability to propose or recommend new courses accessible across various platforms. Additionally, they can access a comprehensive list of courses suggested by fellow users. Furthermore, users possess the ability to mark selected courses as favorites for convenient access, and they can also review the courses they have suggested. Additionally, users are empowered to manage their suggested courses by deleting them if necessary. This feature enhances user engagement by facilitating contribution and collaboration within the learning community.
            </p>
        </div>
    );
}

export default AuthorHome;
