import React, { Component, useState, useEffect } from 'react'


const ResultComponent = props => {

  
  return (
    <div className="result">
      <p>{props.NumbersClicked}</p>
      <p>{props.result}</p>
    </div>
  )
}

export default ResultComponent
