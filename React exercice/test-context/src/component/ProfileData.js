import React from 'react'
import ContentData from './ContentData'
import { Mycontext } from './Mycontext'

const ProfileData = () => {

  return (
    <Mycontext.Consumer>
      {
        (data) => {
          return (
          <div>
            <p>
              <a className='btn btn-primary' data-toggle='collapse' href='#lisainfo'>
                informations sur {data.name}
              </a>

            </p>
            <ContentData />

          </div>

          )
        }
      }
    </Mycontext.Consumer>


  )
}

export default ProfileData
