import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import {Outlet } from "react-router-dom"
import About from '../About/About'


function Root() {
    return (
        <>
        <Header/> 
        <Outlet />
        <Footer/>
        </>
    )
}

export default Root
