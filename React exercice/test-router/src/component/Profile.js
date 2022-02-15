import React, { Component } from 'react'
import axios from 'axios';
import frizer from '../frizer.png'

class Profile extends Component {


    //recuperer l'id dans l'url

    state={
        data: {}
    }

    //afin de pouvoir chercher la data sur l'url on utilise 
    componentDidMount(){
        const data = this.props.match.params.profileId;
        let payload = {
            token: "vVhzdYWVmLgKfw4UrOvAtg",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 300
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp => {
            
            
            this.setState({
                //data[data]=data[5]
                data:resp.data[data]
            })
        });

        


    }
  render() {

    //faire le destructuring afin de recu les donnée 
    const{ email, name, phone}=this.state.data

    return (
      <div className="container mt-3">
          <h1>Profile</h1>
          <img src={frizer}/>

          <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <strong> Nom :</strong>  {name}

              </li>
              <li className='list-group-item'>
              <strong> Email :</strong>  {email}

              </li>
              <li className='list-group-item'>
              <strong>Tel :</strong>  {phone}

              </li>

          </ul>
          
      </div>
    )
  }
}

export default Profile