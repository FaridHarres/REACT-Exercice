import react, { Component } from "react";


const countHits = (WrappedComponnent, power)=>{


    class CountHits extends Component{
        
    state={
        hits: 0
    }

    addone =()=>{
        this.setState((prevState)=>{
            return{
                hits: prevState.hits +1
            }

        })
    }

    componentDidUpdate(prevProps, prevState) { 
        if(this.state !== prevState){
            const componentName= WrappedComponnent.name;
            this.props.reduceHandler(componentName, power)
        }
    } 

        render(){
            return <WrappedComponnent addonehits={this.addone} highOrderComponentState={this.state}  {...this.props} />
        }
    }
    return CountHits
}


export default countHits 