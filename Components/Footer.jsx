import Logo from "./Logo"

const Footer = () => {
    return ( 
        <footer>
            <nav className="footer__nav">
                <div className="footer__brand">
                    <Logo/>
                </div>
                <div className="footer__links">
                    <dl className="footer__company">
                        <dt>Company</dt>
                        <dd>
                            <a href="#" className="nav_link">About</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Jobs</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">For the Record</a>
                        </dd>

                    </dl>
                    <dl className="footer__community">
                        <dt>Communities</dt>
                        <dd>
                            <a href="#" className="nav_link">For Artists</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Developers</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Advertising</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Investors</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Vendors</a>
                        </dd>

                    </dl>
                    <dl className="footer__useful">
                        <dt>Useful Links</dt>
                        <dd>
                            <a href="#" className="nav_link">Support</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Web Player</a>
                        </dd>
                        <dd>
                            <a href="#" className="nav_link">Free Mobile App</a>
                        </dd>

                    </dl>
                </div>
                <div className="social__links">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
               
            </nav>
        </footer>
     );
}
 
export default Footer;