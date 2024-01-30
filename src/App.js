import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class App extends Component {
  state = {countValue: '', words: []}

  onChangeInput = event => {
    this.setState({countValue: event.target.value})
  }

  onClickedBtn = event => {
    event.preventDefault()
    const {countValue} = this.state
    const newWords = {
      id: uuidv4(),
      item: countValue,
    }
    this.setState(prevState => ({
      words: [...prevState.words, newWords],
      countValue: '',
    }))
  }

  render() {
    const {countValue, words} = this.state

    return (
      <div className="bg-container">
        <div className="characters-container">
          <div className="sub-count-container">
            <h1 className="character-heading">
              Count the Characters Like a Boss...
            </h1>
          </div>
          <div className="words-container">
            {words.length > 0 ? (
              <ul>
                {words.map(each => (
                  <li key={each.id}>
                    <p className="count" key={each.id}>
                      {each.item}:{each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="image"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="character-count-container">
          <h1 className="main-heading">Character Counter</h1>
          <form onSubmit={this.onClickedBtn}>
            <input
              placeholder="Enter the Characters here"
              className="input"
              type="text"
              value={countValue}
              onChange={this.onChangeInput}
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
