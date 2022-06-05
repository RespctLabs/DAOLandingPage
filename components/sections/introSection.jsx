import React from 'react'
import controller from '../images/controller.png';
import '../styles/landing.css'


function introSection() {
  return (
    <>
      <img src={controller} style={{position: 'absolute', width: '50%', left: '25vw', top: '5vw'}}/>
      <div id='introductionBody'>
        <span id='title'>Revolution in</span>
        <span id='titleColor'>Web3 Gaming</span>
        <p id='descp'>We are a decentralized autonomous organization on a mission to revolutionize gaming.<br/>Let's build the metaverse by empowering people to be a part of it.</p>
        <div id='btn'>Early Access</div>
      </div>
    
    </>
  )
}

export default introSection