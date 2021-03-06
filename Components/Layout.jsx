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
       {route!=="register"&& route!=="login"&&<Navbar sidenav={sidenav} setSidenav={setSidenav}/>}
       <Sidenav sidenav={sidenav}/>
        {children}
        {route!=="register"&& route!=="login"&&<Footer/>}
        </>
     );
}
 
export default Layout;