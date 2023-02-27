import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <>
    <footer>
    <div className='footer_container'>
    <div className="footer_title">
        <p>Orion data visualisation</p>
        
    </div>
    <div className="footer_date"> <span>{new Date().getFullYear()}</span></div>

    </div>
    </footer>
    </>
  )
}

export default Footer