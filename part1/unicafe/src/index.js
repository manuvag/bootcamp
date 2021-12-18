import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({text, value}) => {
  return (
    <p>{text} : {value} {text === 'Positive' ? '%' : ''}</p>
  )
}

const Button = ({text, click}) => {
  return (
    <button onClick={click}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood( good + 1 )
  }

  const handleNeutral = () => {
    setNeutral( neutral + 1 )
  }

  const handleBad = () => {
    setBad( bad + 1 )
  }

  const all = good + neutral + bad
  const average = (good - bad ) / all
  const positive = (good * 100) / all

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={'Good'} click={handleGood}/>
      <Button text={'Neutral'} click={handleNeutral}/>
      <Button text={'Bad'} click={handleBad}/>
      { all !== 0 ?
        <>
          <h2>Statistics</h2>
          <Statistics text={'Good'} value={good}/>
          <Statistics text={'Neutral'} value={neutral}/>
          <Statistics text={'Bad'} value={bad}/>
          <Statistics text={'All'} value={all}/>
          <Statistics text={'Average'} value={average}/>
          <Statistics text={'Positive'} value={positive}/>
        </>
        : 
        <p>No feedback given</p> 
      }

    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
