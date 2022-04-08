import logo from '../assets/logo.png';

function Navbar({ onClick }) {
    return (
        <nav className='flex-nav'>
            <ul >
                <li className='nav-logo'>
                    <img alt='logo' src={logo} />
                </li>
                <li className='nav-feedbacks'>
                    <p href='/'>Feedbacks</p>
                </li>
                <li className='nav-login'>
                    <p href='' onClick={onClick('login')}>Log in</p>
                </li>
                <li className='nav-signup'>
                    <button className='btn-black' onClick={onClick('signup')}>Sign Up</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;