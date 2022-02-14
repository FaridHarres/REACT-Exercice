import React, { Component } from 'react'
import friza from '../friza.png';
import handleClicks from './handleClick';


export class Frieza extends Component {
    
    render() {
        
        const {clickHandler, backGround} = this.props;

        return (
            <div className={`col ${backGround}`}>
              <img onClick={clickHandler} src={friza} /><br/>
          </div>
        )
      }
}

export default handleClicks(Frieza)