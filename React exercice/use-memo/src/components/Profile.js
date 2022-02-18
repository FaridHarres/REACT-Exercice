import React from 'react'

function Profile({count, profile}) {
    // console.log(profile)

  return (
    <div className='list-group'>
        <li className='list-group-item'><p className='h2'>User Id : {count}</p></li>
        <li className='list-group-item'><strong>Nom : {profile.name} </strong></li>
        <li className='list-group-item'><strong>Prenom : {profile.username} </strong></li>
        <li className='list-group-item'><strong>Email : {profile.email}  </strong></li>
    </div>
  )
}

export default React.memo(Profile)