import React, { Component } from 'react';

const Statistics = ({statistics,handleToggleStatistics})=>{
  return (
    <div className="App">
        <div className="joke--main-container">
            <div className="joke-container">
              <h1>
                  Statistics
              </h1>
              <div className="button-container">
                  <span className="lable">Not Funny({statistics.notFunny.length})</span>
                  <span className="lable">Funny({statistics.funny.length})</span>
              </div>
            </div>
          </div>
          <div>
              <button className="button" onClick={()=>handleToggleStatistics()}>Back to Jokes</button>
          </div>
    </div>
  )

  return(
    <div className="App">
      <div className="joke--main-container">
          <div className="joke-container">
              Statistics Selected
              <div>
                <div className="button-container">
                    <button className="button" onClick={()=>this.handleJokeFeedBack('not-funny')}>Not Funny </button>
                    <button className="button" onClick={()=>this.handleJokeFeedBack('funny')}> Funny </button>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Statistics;
