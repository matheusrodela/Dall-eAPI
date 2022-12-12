import './styles.css';
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>
            <h4>Created by:</h4>
            <p className='authorName'>Matheus Rodela</p>
        </div>
        <div>
            <h4>Powered by:</h4>
            <p><strong>OpenAI</strong></p>
        </div>
    </footer>
  );
}

export {Footer} 