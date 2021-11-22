import React from 'react';
import './pages_css/login.css';
import {BiUserCircle, BiLockAlt} from 'react-icons/bi';
import { useState } from 'react';
import { useHistory } from 'react-router';

export default function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();
    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }   
    const handleClick = () => {
        if (user === 'admin' && pass === '112223'){
            sessionStorage.setItem('accessAdmin', true);
            history.replace('/home');
        } 
        else if (user === 'user' && pass === '123'){
            sessionStorage.setItem('accessUser', true);
            history.replace('/home');
           }     
        else alert('Login failed!');
    }
    return (
        <>
            <div className='loginContainer'>
                <div className="imgContainer">
                    <img src="./img/tower.png" alt="img" className='loginImage'/>
                </div>
                <div className="loginForm">
                    <p className='loginTitle'>
                        DUST MONITORING STATION
                    </p>
                    <div className='formInput'>
                        <i className='icon'>
                            <BiUserCircle />
                        </i>
                        <input type="text" placeholder="Username" className='input' onChange={handleUser}/>
                    </div>
                    <div className='formInput'>
                        <i className='icon'>
                            <BiLockAlt />
                        </i>
                        <input type="password" placeholder="Password" className='input' onChange={handlePass}/>  
                    </div>
                    <button className='loginBtn' onClick={handleClick}>Login</button>
                </div>
            </div>
            
        </>
    )
}
