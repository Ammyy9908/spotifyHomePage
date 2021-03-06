import Link from 'next/link'
const Sidenav = ({sidenav}) => {
    return ( 
        <div className={`sidenav ${!sidenav&&"sidenav__disable"}`}>
            <ul className="side__links">
                <li><Link href="/premium"><a>Premium</a></Link></li>
                <li><Link href="/support"><a>Support</a></Link></li>
                <li><Link href="/download"><a>Download</a></Link></li>
                <span className="divider_mobile">

                </span>
                <li><Link href="/register"><a>Sign up</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
            </ul>
        </div>
     );
}
 
export default Sidenav;