import React, { Component } from 'react'
import '../styles/landing.css'
import '../styles/footer.css'

import twitter from '../images/twitter.png'
import insta from '../images/insta.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'

export default class footer extends Component {
  render() {
    return (
        <div id='footer'>
          <div id='icons'>
            <img src={twitter}/>
            <img src={insta} style={{marginLeft:'5em'}}/>
            <img src={linkedin} style={{marginLeft:'5em'}}/>
            <img src={facebook} style={{marginLeft:'5em'}}/>
          </div>
          <p id='titleColor' size='2vw'>Reach out to Us</p>
          <div id='descp' style={{border: '2px solid #03AFD0', borderRadius:'10em', padding: '1em', width: '20%'}}>Enter your email address </div>
        </div>
    )
  }
}
