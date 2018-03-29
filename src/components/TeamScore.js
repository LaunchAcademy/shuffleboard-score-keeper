import React from 'react'

const TeamScore = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4><button onClick={props.onDecrement}>-</button>{props.score}<button onClick={props.onIncrement}>+</button></h4>
    </div>
  )
}

export default TeamScore