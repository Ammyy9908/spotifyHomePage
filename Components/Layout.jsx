import Footer from "./Footer";
import Navbar from "./Navbar"
import Sidenav from "./Sidenav";
import React from "react"

const Layout = ({children}) => {

    const [sidenav,setSidenav] = React.useState(false);
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