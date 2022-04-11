import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ onClick }) {
    return (
        <nav className='flex-nav'>
            <ul >
                <li className='nav-logo'>
                    <Link to='/'>
                        <img alt='logo' src={logo} />
                    </Link>
                </li>
                <li className='nav-feedbacks'>
                    <Link to='/feedbacks' className='element-underline'>Products</Link>
                </li>
                <li className='nav-login'>
                    <p className='element-underline' onClick={onClick('login')}>Log in</p>
                </li>
                <li className='nav-signup'>
                    <button className='btn-black' onClick={onClick('signup')}>Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;