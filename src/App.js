import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [result, setResult] = useState('')


  const handleClick = (e) => {
    setResult(result.concat(e.target.id))
  }

  const handleClear = () => {
    setResult("");
  }

  const handleBackspace = () => {
    setResult(result.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    }
    catch (err) {
      setResult("Error")
    }
  }

  return (
    <div className="container">
      <form >
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button className="clear" onClick={handleClear} id='clear'>Clear</button>
        <button className="color1" onClick={handleBackspace} id='backspace'>C</button>
        <button className="color" onClick={handleClick} id='/'>/</button>
        <button onClick={handleClick} id='7'>7</button>
        <button onClick={handleClick} id='8'>8</button>
        <button onClick={handleClick} id='9'>9</button>
        <button className="color" onClick={handleClick} id='*'>*</button>
        <button onClick={handleClick} id='4'>4</button>
        <button onClick={handleClick} id='5'>5</button>
        <button onClick={handleClick} id='6'>6</button>
        <button className="color" onClick={handleClick} id='-'>-</button>
        <button onClick={handleClick} id='1'>1</button>
        <button onClick={handleClick} id='2'>2</button>
        <button onClick={handleClick} id='3'>3</button>
        <button className="color" onClick={handleClick} id='+'>+</button>
        <button onClick={handleClick} id='0'>0</button>
        <button onClick={handleClick} id='.'>. </button>
        <button className="color" onClick={handleCalculate} id='equal'>=</button>
      </div>
    </div>

  )
}




