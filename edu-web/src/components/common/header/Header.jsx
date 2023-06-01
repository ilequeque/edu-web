import React, { useState } from 'react'
import Head from "./Head"
import "./header.css"
import { Link } from 'react-router-dom'

export const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB"} onClick={()=> setClick(false)}>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/courses">Курсы</Link></li>
                    <li><Link to="/about">О нас</Link></li>
                    <li><Link to="/team">Команда</Link></li>
                    <li><Link to="/pricing">Цены</Link></li>
                    <li><Link to="/journal">Блог</Link></li>
                    <li><Link to="/contact">Контакты</Link></li>
                </ul>
                <div className="start">
                    <div className="button"><Link to='/login'><p>Войти</p></Link></div>
                </div>
                <button className='toggle' onClick={()=> setClick(!click)}>
                    {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i> }
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header