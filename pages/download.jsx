import Head from "next/head";

const Download = () => {
    return ( 
        <div className="download__hero">
              <Head>
            <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
                <title>Spotify!Download</title>
            </Head>
            <div className="download__section">
                <div className="download__heading">
                    <h1>Download Spotify</h1>
                </div>
                <div className="download__subheading">
                    <p>Play millions of songs on your device.</p>
                </div>
                <div className="download__btn">
                    Download
                </div>
            </div>
        </div>
     );
}
 
export default Download;