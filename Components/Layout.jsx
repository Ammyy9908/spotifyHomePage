import Footer from "./Footer";
import Navbar from "./Navbar"
import Sidenav from "./Sidenav";
import React from "react"

import { useRouter } from 'next/router'

const Layout = ({children,sidenav, setSidenav}) => {

    const router = useRouter()
    console.log(router.route)
    const route = router.route.replace("/","");
    

   

    
    return ( 
        <>
       {route!=="register"&&<Navbar sidenav={sidenav} setSidenav={setSidenav}/>}
       <Sidenav sidenav={sidenav}/>
        {children}
        {route!=="register"&&<Footer/>}
        </>
     );
}
 
export default Layout;