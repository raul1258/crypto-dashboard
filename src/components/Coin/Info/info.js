import React from 'react'
import "./styles.css";


function Info({ name, desc}) {
  return (
    <div className='grey-container'>
      <h3>{name}</h3>
      <p className='desc-links' dangerouslySetInnerHTML={{__html : desc}}>
        
      </p>
    </div>
  )
}

export default Info
