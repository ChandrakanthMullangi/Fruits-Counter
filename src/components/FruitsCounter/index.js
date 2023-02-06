// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  ateMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  ateBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="span"> {mango} </span> mangoes
            <span className="span"> {banana} </span> bananas
          </h1>
          <div className="fruits-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button type="button" className="btn" onClick={this.ateMango}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button type="button" className="btn" onClick={this.ateBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
