import { useState } from 'react'
import './App.css'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const newLeft = left + 1
    setLeft(newLeft)
    setTotal(total + 1)
  }

    const handleRightClick = () => {
      setAll(allClicks.concat('R'))
      const newRight = right + 1
      setRight(newRight)
      setTotal(total + 1)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
        <p>Total: {total}</p>
      </div>
    </div>
  )
}

export default App
