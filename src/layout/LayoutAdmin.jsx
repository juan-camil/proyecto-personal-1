import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const LayoutAdmin = () => {
    return (
        <div>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

export default LayoutAdmin
