import React, { useState} from 'react';

import { Link } from 'react-router-dom';
//import {Button} from '../Button/Button';
import './Navbar.css';


const Navbar = () => {

    

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

 

    return (
        <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    DIARY WORLD
                    <img className='diary' alt = 'diaryImg'  src = "images/diaryImg.png"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                                        {/* fa-times:x표시로고, fa-bars:메뉴탭 로고*/}
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/task' className='nav-links' onClick = {closeMobileMenu}>
                            Task
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/quest' className='nav-links' onClick = {closeMobileMenu}>
                            Quest
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-links' onClick = {closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/inventory' className='nav-links' onClick = {closeMobileMenu}>
                            Inventory
                        </Link>
                    </li>
                    
                 
                </ul>
             

                
            </div>
            
            
            <div className='nav-under-line' >
                     Hello, 『{localStorage.getItem('nickname')}』! / 0G
                     <img className="navprofile" alt="imgtest" src="/images/기본코디네비바.png" />
              {/**프로필 표시,근데 창 작아지면 삐져나오니까 수정해야함, 여기에 백엔드 연결 */}
              </div>
              
        </nav>
        
        
        </>
    );
};

export default Navbar;