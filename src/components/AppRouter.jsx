import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Error from './../pages/Error';
import Posts from './../pages/Posts';
import About from './../pages/About';

const AppRouter=() => {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
  )
}
export default AppRouter;