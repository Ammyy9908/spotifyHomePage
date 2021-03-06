import Footer from "./Footer";
import Navbar from "./Navbar"
import Sidenav from "./Sidenav";
import React from "react"

const Layout = ({children,sidenav, setSidenav}) => {

   

    
    return ( 
        <>
       <Navbar sidenav={sidenav} setSidenav={setSidenav}/>
       <Sidenav sidenav={sidenav}/>
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;