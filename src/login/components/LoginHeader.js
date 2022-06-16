import React from 'react';

import './LoginHeader.css'

const LoginHeader = () =>{
    return <header className='login-header'>
        <a href='/login'className='login-login'>Log In</a>
        <a href='/register'className='login-signup'>Sign Up</a>
        <a href='' className='login-contact'>Contacts</a>
    </header>;
}

export default LoginHeader;