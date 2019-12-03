import React, { Component, useState, useEffect } from 'react'

const KeyPadComponent = props => {
  return (
    <div className="button">
      <button className="clear" name="CE" onClick={props.clearresult}>
        CE
      </button>
      <button name="/" onClick={e => props.setValue(e.target.name)}>
        ÷
      </button>
      <br />

      <button name="7" onClick={e => props.setValue(e.target.name)}>
        7
      </button>
      <button name="8" onClick={e => props.setValue(e.target.name)}>
        8
      </button>
      <button name="9" onClick={e => props.setValue(e.target.name)}>
        9
      </button>
      <button name="-" onClick={e => props.setValue(e.target.name)}>
        -
      </button>
      <br />

      <button name="4" onClick={e => props.setValue(e.target.name)}>
        4
      </button>
      <button name="5" onClick={e => props.setValue(e.target.name)}>
        5
      </button>
      <button name="6" onClick={e => props.setValue(e.target.name)}>
        6
      </button>
      <button name="+" onClick={e => props.setValue(e.target.name)}>
        +
      </button>
      <br />

      <button name="1" onClick={e => props.setValue(e.target.name)}>
        1
      </button>
      <button name="2" onClick={e => props.setValue(e.target.name)}>
        2
      </button>
      <button name="3" onClick={e => props.setValue(e.target.name)}>
        3
      </button>
      <button name="=" onClick={props.setResultHandler}>
        =
      </button>
      <br />
    </div>
  )
}
export default KeyPadComponent
