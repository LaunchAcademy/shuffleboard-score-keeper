import React from "react"

const VictoryCondition = (props) => {
  if(props.game.red >= 21) {
    return <div>Red Wins</div>
  }

  if(props.game.blue >= 21) {
    return <div>Blue Wins</div>
  }

  return <div></div>
}

export default VictoryCondition