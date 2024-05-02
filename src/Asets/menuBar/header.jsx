import React from 'react'
import './Header.css'
import logo from './image/logo.png'

function Header() {

    
  return (
    <div>
        <header>
            <div className='header-box'>
                <img src={logo} alt="" />
            </div>
            <div className='countries'>
                <select>
                    <option id='option' value="">india</option>
                  <span><option value="">USA</option></span>
                    <option value="">OMAN</option>
                    <option value="">QATAR</option>
                    <option value="">BAHRAIN</option>
                    <option value="">KUWAIT</option>
                    <option value="">SOUDHI ARC</option>
                </select>
            </div>
        </header>
    </div>
  )
}

export default Header