import Link from 'next/link'
import Logo from './Logo'
const Sidenav = ({sidenav}) => {
    return ( 
        <div className={`sidenav ${!sidenav&&"sidenav__disable"}`}>
            <ul className={`side__links ${sidenav&&"side__links__animate"}`}>
                <li><Link href="/premium"><a>Premium</a></Link></li>
                <li><Link href="/support"><a>Support</a></Link></li>
                <li><Link href="/download"><a>Download</a></Link></li>
                <span className="divider_mobile">

                </span>
                <li><Link href="/register"><a>Sign up</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
            </ul>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="logo" className={`logo__image__sidenav ${sidenav&&"logo__image__sidenav__animate"}`}/>
        </div>
     );
}
 
export default Sidenav;