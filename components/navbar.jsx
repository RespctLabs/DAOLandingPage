import '../styles/navbar.css'
import respctIco from '../images/respct.svg'
import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div id='nav'>
        <img src={respctIco} style={{marginLeft: '2em'}}/>
        <div style={{display: 'flex',alignItems: 'center'}}>
            <div id='testnet'> 
                    <div style={{backgroundColor: '#00FF29',borderRadius:'5em',width:'1em',height:'1em'}}></div>
                    <p>Testnet</p>
            </div>
            <div>
                <p id='login'>Login</p>
            </div>
        </div>
      </div>
    )
  }
}
