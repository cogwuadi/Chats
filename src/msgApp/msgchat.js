import React from 'react'
import { useParams } from "react-router-dom"

const Msgchat = () => {
  let { id } = useParams ()
  return (
    <div>
        <h2 className='move'>Message: {id} </h2>
    </div>
  )
  
}

export default Msgchat;