import Head from "next/head";
import HomeHero from "../Components/HomeHero";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home({ sidenav, setSidenav }) {
  React.useEffect(() => {
    if (sidenav) {
      setSidenav(false);
    }
  }, []);
  return (
    <div className="home">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <title>Listening is everything - Spotify</title>
      </Head>
      <HomeHero />
    </div>
  );
}
