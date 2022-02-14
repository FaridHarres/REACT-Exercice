import { Component } from "react";
import goku from "./goku.png";



class Goku extends Component {
    

  

    render() {
        const {hits, addone, name} = this.props


        return (
            <div className="col">

                <img src={goku} /> <br />
                <br/>
                <button onClick={addone} className="btn btn-success"> {name} Frappe</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                coups
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {hits}
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Goku;