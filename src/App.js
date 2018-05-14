import React, { Component } from 'react';
import Statistics from './Statistics'

class App extends Component {
  constructor(){
    super()
    this.state = {
      jokeInfo: '',
      statistics: {
        funny: [],
        notFunny:[]
      },
      lastJokeId: '',
      isStatisticsSelected: false
    }
  }
  componentDidMount(){
    this.getJoke()
  }

  getJoke(id){
      let url = id ? 'https://icanhazdadjoke.com/j/'+ this.state.lastJokeId : 'https://icanhazdadjoke.com'
      this.setState({
        lastJokeId: this.state.jokeInfo.id
      })
      fetch(url,{
        'headers': { 'accept': 'application/json' },
        'mode':'cors'
      })
      .then((res)=>{
          console.log(res)
          return res.json()
      })
      .then((resJson)=>{
        this.setState({
          jokeInfo: resJson
        })
       })
  }

  handleJokeFeedBack(jokeFeedBack){
    var { jokeInfo, statistics } = this.state
    if(jokeFeedBack == 'funny'){
        statistics.funny.push(jokeInfo.id)
    }else{
        statistics.notFunny.push(jokeInfo.id)
    }
    this.getJoke()
  }

  handleToggleStatistics(){
    this.setState({
      isStatisticsSelected: !this.state.isStatisticsSelected
    })
  }

  handleGetPreviousJoke(){
    this.getJoke(this.state.lastJokeId)
  }

  render() {
    if(this.state.isStatisticsSelected)
      return (
          <div>
            <Statistics statistics={this.state.statistics} handleToggleStatistics={()=>this.handleToggleStatistics()}/>
          </div>
      )
    return (
      <div className='App'>
          <div className='joke--main-container'>
              <div className='joke-container'>
                <span className='joke'>
                    {this.state.jokeInfo.joke}
                </span>
                <div className='button-container'>
                    <button className='button' onClick={()=>this.handleJokeFeedBack('not-funny')}>Not Funny </button>
                    <button className='button' onClick={()=>this.handleJokeFeedBack('funny')}> Funny </button>
                </div>
              </div>
            </div>
            {
              this.state.lastJokeId ?
              <div>
                <button className='prev-button' onClick={()=>this.handleGetPreviousJoke()}> Change mind ? Vote previous Joke.</button>
              </div> :
              <div/>
            }
            <div>
                <button className='button' onClick={()=>this.handleToggleStatistics()}>Statistics</button>
            </div>
      </div>
    );
  }
}

export default App;
