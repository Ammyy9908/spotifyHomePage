import Head from "next/head";

const support = () => {
    return ( 
        <div>
            <Head>
            <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
                <title>Spotify|Support</title>
            </Head>
        <div className="support">
            <div className="support__hero">
                <div className="support__header">
                    <div className="heading__suport">
                        <h1>How can we help you?</h1>

                    </div>
                    <br/>
                    <div className="support__search">
                        <i className="fas fa-search"></i>
                        <span>Search</span>
                    </div>
                    <div className="support_quick__links">
                        <div className="help__link">
                            <h4>ACCOUNT HELP</h4>
                            <a href="#">Can't remember login details</a>
                        </div>
                        <div className="help__link">
                            <h4>ACCOUNT HELP</h4>
                            <a href="#">Can't reset password</a>
                        </div>
                        <div className="help__link">
                            <h4>ACCOUNT HELP</h4>
                            <a href="#">Country or region settings</a>
                        </div>
                        <div className="help__link">
                            <h4>ACCOUNT HELP</h4>
                            <a href="#">Verify email address</a>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
     );
}
 
export default support;