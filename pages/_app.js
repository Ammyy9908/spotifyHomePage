import Layout from "../Components/Layout";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [sidenav, setSidenav] = React.useState(false);
  return (
    <Layout sidenav={sidenav} setSidenav={setSidenav}>
      <Component {...pageProps} sidenav={sidenav} setSidenav={setSidenav} />
    </Layout>
  );
}

export default MyApp;
