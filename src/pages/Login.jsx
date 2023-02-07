import React, { useContext } from 'react'
import MyInput from './../components/UI/input/MyInput';
import MyButton from './../components/UI/button/MyButton';
import { AuthContext } from './../context/index';
import { Route } from 'react-router-dom';
import Posts from './Posts';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

  return (
    <div><h1>Log In</h1>
    <form onSubmit={login}>
    <MyInput type="text" placeholder='Your nickname' />
    <MyInput type="password" placeholder='Your password' />
    <MyButton>Log In</MyButton>
    </form>
    </div>
  )
}

export default Login