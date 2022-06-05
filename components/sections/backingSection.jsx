import React from 'react'
import '../styles/landing.css'
import mesh from '../images/mesh.png'
import tachyon from '../images/tachyon.png'
import protocol from '../images/protocol.png'
function backing() {
  return (
    <>
      <div id="backingImage"/>
      <div id='backingBody'>
        <div id='backingContent'>  
          <h id='backingTitle'>Backed by the<br/>Giants</h>
          <p id='backingDescp'>Respct is a creator token platform where you<br/>become a shareholder in the journey of your favorite<br/>creator</p>
        </div>
        <div id='backings'>
            <img src={mesh} style={{marginTop: '20%'}}/>
            <img src={protocol} style={{marginTop: '20%'}}/>
            <img src={tachyon} style={{marginTop: '20%'}}/>
        </div>
      </div>
    </>
  )
}

export default backing