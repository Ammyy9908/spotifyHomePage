import Head from "next/head";
import HomeHero from "../Components/HomeHero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <title>Spotify|Listening is Everything</title>
      </Head>
      <HomeHero />
    </div>
  );
}
