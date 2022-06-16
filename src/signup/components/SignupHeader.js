import React from 'react';
import './SignupHeader.css'


const SignupHeader = () =>{
    return <header className='signup-header'>
        <a href='/login'className='signup-login'>Log In</a>
        <a href='/register'className='signup-signup'>Sign Up</a>
        <a href='' className='signup-contact'>Contacts</a>
    </header>;
}

export default SignupHeader;