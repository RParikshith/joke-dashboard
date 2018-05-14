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
}

export default Statistics;
