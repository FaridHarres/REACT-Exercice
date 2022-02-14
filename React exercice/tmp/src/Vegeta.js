import { Component } from "react";
import vegeta from "./vegeta.png";
import countHits from "./CountHits";


class Vegeta extends Component {

  render() {
      const{name, addonehits, highOrderComponentState, life} = this.props;
      const lifeValue = life > 0? (<td>{life} %</td> ):(<td className="badge badge-danger" >mort</td>);
    
      const btn = life>0 ? (<button onClick={addonehits} className="btn btn-success m-3" >{name} Frappe</button>
      ):(<button className="btn btn-danger m-3 disabled" > Mort</button>
      );
    return (
      <div className="col">

          <img src={vegeta}/> <br/>
        {btn}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">
                            coups
                        </th>
                        <th scope="col">
                            Vie
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {highOrderComponentState.hits}
                        </td>
                        
                            {lifeValue}
                        
                    </tr>

                </tbody>
            </table>
      </div>
    )
  }
}

export default countHits(Vegeta, 20)