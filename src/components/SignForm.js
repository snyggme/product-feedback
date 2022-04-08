import React from 'react';

function SignForm({ type, setModal }) {

    const inputName = React.createRef();
    const inputPass = React.createRef();
    const inputEmail = React.createRef();

    const handleClick = (type) => (e) => {
        e.preventDefault();
        setModal({
            show: true,
            type
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const validate = ({ username, password }) => {

    }

    return (
        <div>
            <form id='login-form' onSubmit={handleSubmit}>
                <input 
                    required 
                    ref={inputName} 
                    type="name" 
                    id="name" 
                    placeholder="Username"
                />
                {
                    type === 'signup' 
                    ? (
                        <input 
                            required 
                            ref={inputEmail}
                            type="email" 
                            id="email" 
                            placeholder="E-mail" 
                        />
                    )
                    : ''
                }
                <input 
                    required 
                    ref={inputPass}
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                />
                <button type="submit" id="login-btn">{type}</button>
            </form>
            {
                type === 'signup'
                ? (
                    <p className='signup-q'>
                        Already have an account? <a href='/' onClick={handleClick('login')}>Log In</a> 
                    </p>
                )
                : (
                    <p className='signup-q'>
                        Don't have an account? <a href='/' onClick={handleClick('signup')}>Sign Up</a> 
                    </p>                   
                )
            }

        </div>
    )
}

export default SignForm;