import { Component, Fragment } from "react";


class AddHits extends Component{
    state = {
        figthers: {
            vegeta: true,
            goku: true,
        },
        hits: 0
    }

    addone = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1
            }

        })
    }
    render(){
        return(
            <Fragment>
                { this.props.render(this.state.hits, this.addone, this.state.figthers) }
            </Fragment>
        )
    }
}

export default AddHits