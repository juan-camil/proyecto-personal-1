import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const LayoutPublic = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Sidebar/> 
        </div>
    )
}

export default LayoutPublic
