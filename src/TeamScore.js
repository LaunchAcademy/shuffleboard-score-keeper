import React, { Component } from 'react'

const TeamScore = (props) => {
  return (
    <div>
      <h2>{ props.color } </h2>
      <p>
        <button onClick={props.onDecrement}>-</button>
        <strong>&nbsp;&nbsp;{props.score}&nbsp;&nbsp;</strong>
        <button onClick={props.onIncrement}>+</button>
      </p>
    </div>
  )
}

export default TeamScore