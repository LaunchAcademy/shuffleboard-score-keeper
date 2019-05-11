import React, {Component} from 'react'
import TeamScore from './TeamScore'
import VictoryCondition from './VictoryCondition'

const minScore = 0
const maxScore = 21

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      red: minScore,
      blue: minScore
    }
    this.handleScoreChange = this.handleScoreChange.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  resetGame() {
    this.setState({
      red: minScore,
      blue: minScore
    })
  }

  handleScoreChange(teamKey, amount) {
    // this.setState({
    //   [teamKey]: this.state[teamKey] + amount
    // })

    if(this.state[teamKey] + amount >= minScore && this.state[teamKey] + amount <= maxScore) {
      if(teamKey === "red") {
        this.setState({red: this.state.red + amount})
      }
      else {
        this.setState({blue: this.state.blue + amount})
      }
    }

  }

  componentWillMount() {
    console.log("Will Mount")
  }

  componentDidMount() {
    console.log("Did Mount")
  }

  componentWillReceiveProps(props) {
    console.log("Receiving Props")
  }

  shouldComponentUpdate() {
    console.log("Should it update?")
    return true
  }

  componentWillUpdate() {
    console.log("OMG guys the component is going to update")
  }

  componentDidUpdate() {
    console.log("That was awesome")
  }


  render() {
    console.log("Render")
    const redClickIncrement = (event) => {
      event.preventDefault()
      this.handleScoreChange("red", 1)
    }

    const redClickDecrement = (event) => {
      event.preventDefault()
      this.handleScoreChange("red", -1)
    }

    const blueClickIncrement = (event) => {
      event.preventDefault()
      this.handleScoreChange("blue", 1)
    }

    const blueClickDecrement = (event) => {
      event.preventDefault()
      this.handleScoreChange("blue", -1)
    }

    return (
      <div>
        <h1>Shuffleboard Score Tracker</h1>
        <TeamScore 
          onIncrement={redClickIncrement}
          onDecrement={redClickDecrement}
          color="Red" 
          score={this.state.red }/>
        <TeamScore 
          onIncrement={blueClickIncrement}
          onDecrement={blueClickDecrement}
          color="Blue" 
          score={this.state.blue } />
        <button onClick={this.resetGame}>Reset</button>
        <VictoryCondition game={this.state} />
      </div>
    )
  }
}

export default Game