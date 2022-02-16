import React, { useContext } from "react"
import { Mycontext, ColorContext } from "./Mycontext"





// const ContentData = () => {
//   return (
//     <Mycontext.Consumer>
//       {
//         //on recupere lobjet user quon a envoyé depuis app.js
//         user => {
//           return (
//             <ColorContext.Consumer>
//               {
//                 Color => {
//                   return (

//                     <div style={{ color: Color }} >
//                       <ul >
//                         <li >Nom: {user.name} </li>
//                         <li >age: {user.age} </li>
//                       </ul>
//                     </div>

//                   )
//                 }
//               }
//             </ColorContext.Consumer>
//           )
//         }
//       }

//     </Mycontext.Consumer>
//   )
// }

// export default ContentData

//..................................................




//tout cela peut etre remplacer par useContext
const ContentData = () => {

  const useree = useContext(Mycontext)
  const coloree = useContext(ColorContext)
  return (
    <div style={{ color: coloree }} >
      <ul >
        <li >Nom: {useree.name} </li>
        <li >age: {useree.age} </li>
      </ul>
    </div>
  )
}

export default ContentData
