import React, { Component } from 'react'
import goku from '../goku.png';
import handleClicks from './handleClick';


export class Goku extends Component {

    render() {

        const {clickHandler, backGround} =this.props;
        return (
            <div className={`col ${backGround}`}>
              <img onClick={clickHandler} src={goku} /><br/>
          </div>
        )
      }
}

export default handleClicks(Goku)