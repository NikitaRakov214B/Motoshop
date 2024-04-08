import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
 
  return (
      <header>
        <div className='Logo'>
          <img src={require('./Logo.jpg')} alt='Logo' width="156" height="156"  />
        </div>
            <ul className='Navigation'>
                <li className='NavLeft'>
                  <Link to="/">Страница товаров</Link>
                </li>
                <li className='NavLeft'>
                  <Link to="/ContactUS">Связаться с нами</Link>
                </li>
        
                <li className='NavRight'>
                  <Link to="/AboutUS">О нас</Link>
                </li>
            </ul>
        <div className='Presentation'>  
        </div>
      </header>
)}
