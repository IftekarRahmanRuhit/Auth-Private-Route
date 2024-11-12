import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabar from './Navabar'

const Root = () => {
  return (
    <div>
        <Navabar></Navabar>
        <Outlet></Outlet>
      



    </div>
  )
}

export default Root
