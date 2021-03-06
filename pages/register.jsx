import React from "react";
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
                <h1>Regsiter Page</h1>
            </div>
        </div>
     );
}
 
export default Regsiter;