import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkedIn from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="blur footerblur"></div>
      <div className="blur footerblur2"></div>
      <hr />
      <div>
        <img src={github} alt="" />
        <img src={insta} alt="" />
        <img src={linkedIn} alt="" />
      </div>
      <img src={logo} alt="" />
    </div>
  )
}

export default Footer