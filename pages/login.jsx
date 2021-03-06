import Head from "next/head";
import Link from "next/link";
import InputGroup from "../Components/InputGroup";
import LogoForm from "../Components/Logo2"
import React from "react";
const Login = ({...pageProps}) => {

    const { sidenav, setSidenav } = pageProps;

    
  React.useEffect(() => {
    if (sidenav) {
      setSidenav(false);
    }
  }, []);
    return ( 
        <div className="login__template">

            <Head>
            <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
            </Head>
            <div className="header__login__top">
                <Link href="/"><a className="logo__login"></a></Link>
                
            </div>
            <div className="container__fluid">
                    <div className="login__content">
                        <div className="heading__small">
                            <h2>To continue,login into Spotify</h2>
                        </div>
                        <div className="social__buttons">
                            <a href="#" className="btn btn-facebook"><div className="button_wrapper"><i className="fab fa-facebook"></i><span>Continue with Facebook</span></div></a>
                            <a href="#" className="btn btn-apple"><div className="button_wrapper"><i className="fab fa-apple"></i><span>Continue with Apple</span></div></a>
                            <a href="#" className="btn btn-google"><div className="button_wrapper"><i className="fab fa-google"></i><span>Continue with Google</span></div></a>
                            <a href="#" className="btn btn-phone">Continue with a phone Number</a>
                        </div>
                        <span className="or__divider">
                    or
                  </span>
                  <form action="#">
                  <InputGroup type="email" placeholder="Email address or username" label="Email address or username"/>
                    <InputGroup type="password" placeholder="Password" label="Password"/>
                    <div className="form__control">
                    <a href="#" className="forget__link">Forget your password?</a>
                    <input type="submit" value="Login In" className="login__submit"/>
                    </div>
                    <div className="divider__login"></div>
                    <div className="auth__swticher__login">
                        <h2>Don't have an account?</h2>
                        <Link href="/register"><a className="button__signup">Sign up for spotify</a></Link>
                    </div>
                  </form>
                    </div>
                </div>
        </div>
     );
}
 
export default Login;