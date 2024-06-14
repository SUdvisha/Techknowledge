import React from 'react'
import NavBar from './NavBar/NavBar';
import Footer from "C:/Users/udvis/OneDrive/Desktop/Techknowledge/client/src/components/Footer/Footer.js";
import {Outlet} from 'react-router-dom'

function RouteLayout() {
  return (
    <div>
        <NavBar/>
        <div style={{minHeight:'65vh'}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
export default RouteLayout;
