import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Error from './../pages/Error';
import Posts from './../pages/Posts';
import About from './../pages/About';
import PostIdPage from './../pages/PostIdPage';
import {  routes } from '../router';

const AppRouter= () => {
  return (
    <Routes>
        {routes.map(route => 
            <Route path={route.path} element={route.element} key={route.path} />

            

            
        )}

      </Routes>
  )
}
export default AppRouter;