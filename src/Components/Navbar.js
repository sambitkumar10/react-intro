import React from 'react'
import Button from './Button'
import Links from './Links'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div style={{background:'grey',height:'auto',width:'100%',display:'flex'}} >
        <Logo />
        <Links />
        <Button/>
    </div>
  )
}

export default Navbar