import './styles.css';
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='logoContainer'>
        <h2 className='logo'>&lt;Mr.Dev/&gt;</h2>
      </div>
      <ul>
        <li>
          <a href='/'>Create Image</a>
        </li>
        <li>
          <a href='/editImage'>Edit Image</a>
        </li>
      </ul>
    </header>
  );
}

export {Header} 
