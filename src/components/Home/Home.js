import React from 'react'
import axios from 'axios'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      response: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()

    axios({
      method: 'post',
      url: '/api/input',
      data: {
        input: this.state.input
      }
    }).then(r =>{
      console.log('RESPONSE', r)
      this.setState(Object.assign(this.state, {response: r.data.input.input}))
    }).catch(err => {
      console.log('ERROR', err)
      this.setState(Object.assign(this.state, {response: 'THERE WAS AN ERROR'}))
    })
  }

  handleChange(e){
    let id = e.target.id
    let newState = {}
    newState[id] = e.target.value
    this.setState(Object.assign(this.state, newState))
  }

  render() {
    return(
      <div>
        <header className='header'>
          <h1 className='title'>Welcome to React</h1>
        </header>
        <p className='intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='input'>Send to Server</label><br/>
          <input id='input' type='text' onChange={this.handleChange} value={this.state.input}/><br/>
          <button type='submit'>Submit</button>
        </form>
        <div className='response'>
          <strong>Server Response:</strong>
          <p id='server-response'>{this.state.response}</p>
        </div>
      </div>
    )
  }
}

export default Home
