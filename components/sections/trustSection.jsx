import React from 'react'
import '../styles/landing.css'
import games from '../images/Games.png'
import guilds from '../images/Guilds.png'
import panel from '../images/panel.png'
import zIndex from '@mui/material/styles/zIndex'
function trustSection() {
  return (
    <>
      <div id='trustBody'>
        <img id='moveLeft' src={panel} style={{width: '70%', marginTop: '5%'}}/>
        <div style={{display: 'flex'}}>
            <span id='titleColor'style={{marginRight:'0.3em'}}>Trusted</span>
            <span id='title'>by the Industry</span>
        </div>
        <img src={games} style={{position: 'absolute', right: '2vw',top: '5vw'}}></img>
        <img src={guilds} style={{position: 'absolute', left: '2vw',bottom: '5vw', zIndex:'10'}}></img>
        <p id='descp' style={{fontSize:'1vw'}}>We are a decentralized autonomous organization on a mission to revolutionize gaming.<br/>Let's build the metaverse by empowering people to be a part of it.</p>
        <div id='btn'>Early Access</div>
        <img id='moveRight' src={panel} style={{width: '70%', marginBottom: '5%'}}/>
      </div>
    </>
  )
}

export default trustSection