import React, { Component, useState, useEffect } from 'react'

import KeypadComponent from '../components/KeypadComponent'
import ResultComponent from '../components/ResultComponent'

const HomePage = () => {
  const [Result, SetResult] = useState([])
  const [NumbersClicked, SetNumberClicked] = useState([])

  const setValue = value => {
    SetNumberClicked([...NumbersClicked, value])

    console.log(NumbersClicked)
  }
  //const reducer = (accumulator, currentValue) => accumulator + currentValue
const clearresult = () => {
  SetNumberClicked([])
  SetResult([])
}
  const setResultHandler = () => {
    console.log('seeting result')
    var joined = NumbersClicked.join('')
    console.log(joined)
    var result = eval(joined)
    console.log(result)

    SetResult(result)
  }

  useEffect(() => {
    SetResult()
  }, [])

  return (
    <div>
      <ResultComponent result={Result} />
      <KeypadComponent
        setValue={setValue}
        setResultHandler={setResultHandler}
        clearresult={clearresult}
      />
    </div>
  )
}

export default HomePage
