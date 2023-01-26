import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoIosContacts} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {

   const [activeNav, setActiveNav] = useState('#');

   const changeActive = (type) => {
        return activeNav === type ? 'active' : '';
   }

    return (
        <nav>
            <a href='#' 
               onClick={() => setActiveNav("#")} 
               className={changeActive('#')}>
                <AiOutlineHome />
            </a>
            <a href='#about' 
                onClick={() => setActiveNav('#about')} 
                className={changeActive('#about')}>
                <AiOutlineUser />
            </a>
            <a href='#experience'
                onClick={() => setActiveNav('#experience')} 
                className={changeActive('#experience')}>
                <BiBook />
            </a>
            <a href='#services'
                onClick={() => setActiveNav('#services')} 
                className={changeActive('#services')}>
                <RiServiceLine />
            </a>
            <a href='#contact'
                onClick={() => setActiveNav('#contact')} 
                className={changeActive('#contact')}>
                <IoIosContacts />
            </a>
        </nav>
    )
}

export default Nav
