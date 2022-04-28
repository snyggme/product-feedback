import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar({ onClick, isSigned }) {
    return (
        <nav className='flex-nav'>
            <ul >
                <li className='nav-logo'>
                    <Link to='/'>
                        <img alt='logo' src={logo} />
                    </Link>
                </li>
                <li className='nav-feedbacks'>
                    <Link to='/products' className='element-underline'>Products</Link>
                </li>
                <li className='nav-login'>
                    { isSigned 
                        ? <p>Hello, BOB</p>
                        : <p className='element-underline' onClick={onClick('login')}>Log in</p>
                    }
                </li>
                <li className='nav-signup'>
                    { isSigned 
                        ? <button className='btn-black' onClick={onClick('logout')}>Logout</button>
                        : <button className='btn-black' onClick={onClick('signup')}>Sign Up</button>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;