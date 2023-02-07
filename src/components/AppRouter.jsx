import React, { useContext } from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {  publicRoutes, privateRoutes } from '../router';
import { AuthContext } from './../context/index';
import Loader from './UI/loader/Loader';

const AppRouter= () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

  return (
    isAuth 
    ?
    <Routes>
        {privateRoutes.map(route => 
            <Route path={route.path} element={<route.element/>} key={route.path} />
        )}
        <Route path="/*" element={<Navigate to="/posts" />} />
      </Routes>
    :
    <Routes>
        {publicRoutes.map(route => 
            <Route path={route.path} element={<route.element/>} key={route.path} />
        )}
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
export default AppRouter;