import React from 'react'

import TeamScore from './TeamScore'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "red": 0,
      "blue": 0
    }

    this.adjustScore = this.adjustScore.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  adjustScore(team, pointDelta){
    if(team === "red"){
      if(!(this.state.red === 0 && pointDelta < 0)){
        this.setState({
          "red": this.state.red + pointDelta
        })
      }
    }
    else {
      if(!(this.state.blue === 0 && pointDelta < 0)){
        this.setState({
          "blue": this.state.blue + pointDelta
        })
      }
    }
  }

  resetGame(){
    this.setState({
      "red": 0,
      "blue": 0
    })
  }

  render(){
    const redIncrement = () => {
      this.adjustScore("red", 1)
    }

    const redDecrement = () => {
      this.adjustScore("red", -1)
    }

    const blueIncrement = () => {
      this.adjustScore("blue", 1)
    }

    const blueDecrement = () => {
      this.adjustScore("blue", -1)
    }

    return (
      <div>
        <h1>Shuffleboard Score Keeper</h1>
        <TeamScore
          name="red"
          score={this.state.red}
          onIncrement={redIncrement}
          onDecrement={redDecrement} />

        <TeamScore
          name="blue"
          score={this.state.blue}
          onIncrement={blueIncrement}
          onDecrement={blueDecrement} />

        <button onClick={this.resetGame}>Reset Game</button>
      </div>
    )
  }
}

export default Game