import Head from "next/head";
import Plans from "../Components/Plans";

const Premium = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <title>Spotify|Premium</title>
      </Head>
      <div className="hero_premium_top">
        <article className="article__top__header hrKHap">
          <header className="header__top__premium jDwODi">
            <div className="header__top__heading">
              <h1>Get Premium free for 1 month</h1>
            </div>
            <div className="header__top__subheading">
              <h2 className="dWaIOV">Only $9.99 after. Cancel anytime.</h2>
            </div>
            <div className="header__top__buttons">
              <div className="button__start">
                <a href="#">GET STARTED</a>
              </div>
              <div className="button__plans">
                <a href="#">VIEW PLANS</a>
              </div>
            </div>
          </header>
        </article>
      </div>
      <section className="hero__middle_premium">
        <article className="hero__article__wrapper">
          <header className="hero__middle__header">
            <h1 className="hero__middle__title">Why go Premium?</h1>
            <ul className="hero__middle__features">
              <li className="hero__middle__feature_list">
                <div className="list__image music"></div>
                <div className="list__feature__details">
                  <p className="feature__title">Download music.</p>
                  <p className="feature__subtitle">Listen anywhere.</p>
                </div>
              </li>
              <li className="hero__middle__feature_list">
                <div className="list__image interrupt"></div>
                <div className="list__feature__details">
                  <p className="feature__title">No ad interruptions.</p>
                  <p className="feature__subtitle">Enjoy nonstop music.</p>
                </div>
              </li>
              <li className="hero__middle__feature_list">
                <div className="list__image any__song"></div>
                <div className="list__feature__details">
                  <p className="feature__title">Play any song.</p>
                  <p className="feature__subtitle">Even on mobile.</p>
                </div>
              </li>
              <li className="hero__middle__feature_list">
                <div className="list__image skips"></div>
                <div className="list__feature__details">
                  <p className="feature__title">Unlimited skips.</p>
                  <p className="feature__subtitle">Just hit next.</p>
                </div>
              </li>
            </ul>
          </header>
        </article>
      </section>
      <Plans />
    </div>
  );
};

export default Premium;
