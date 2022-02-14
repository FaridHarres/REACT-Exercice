import React, { Component } from "react";



const handleClicks=(Wrappedcomponent)=>{
    
    class HandleClicks extends Component{
        state={
            bg: ''
          }
        
          handleClick=()=>{

            if(Wrappedcomponent.name === "Frieza"){
                this.setState({
                    bg: 'bg-danger'
                  })
            }else{
                this.setState({
                    bg: 'bg-success'
                  })
            }
            
        
        
          }

        render(){

            if(this.state.bg === "bg-danger"){
                throw new Error();
    
            }
            return <Wrappedcomponent clickHandler={this.handleClick} backGround={this.state.bg}/>
        }
    }
    return HandleClicks;
}
export default handleClicks