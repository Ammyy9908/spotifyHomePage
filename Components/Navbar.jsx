import Logo from "./Logo"
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar_wrapper">
            <div className="logo">
                <Link href='/'><a><Logo/></a></Link>
            </div>
            <div className="links">
                   <Link href="/premium"><a>Premium</a></Link>
                    <Link href="/support"><a>Support</a></Link>
                    <Link href="/download"><a>Download</a></Link>
                    <div className="divider"></div>
                    <Link href="/reg"><a>Sign up</a></Link>
                    <Link href="/login"><a>Log in</a></Link>
                
            </div>
            <div className="toggle"><MenuIcon/></div>
            </div>
        </div>
     );
}
 
export default Navbar;