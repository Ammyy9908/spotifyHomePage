import Link from 'next/link'
import React from "react";
import InputGroup from "../Components/InputGroup";

import LogoForm from "../Components/Logo2";
const Regsiter = ({ ...pageProps }) => {
    const { sidenav, setSidenav } = pageProps;

    
  React.useEffect(() => {
    if (sidenav) {
      setSidenav(false);
    }
  }, []);
    return ( 
        <div className="register">
            <div className="container__reg">
                <div className="form__section">
                  <div>
                  <Link href="/"><a><LogoForm/></a></Link>
                  </div>
                  <h2>Sign up for free to start listening.</h2>
                  <div className="facebook__signup__button">
                    <a href="#">Sign up with facebook</a>
                  </div>
                  <span className="or__divider">
                    or
                  </span>
                  <form action="#">
                    <h2>Sign up with your email address</h2>
                    <InputGroup type="email" placeholder="Enter your email" label="What's your email"/>
                    <InputGroup type="email" placeholder="Enter your email again." label="Confirm your email"/>
                    <InputGroup type="password" placeholder="Create a password" label="Create a password"/>
                    <InputGroup type="text" placeholder="Enter a profile name." label="What should we call you?"/>
                    <input type="submit" value="SIGN UP" className="submit__button"/>
                  </form>
                  <span className="auth__switcher">Have an account?<Link href="/login"><a>Login</a></Link></span>
                </div>
            </div>
        </div>
     );
}
 
export default Regsiter;