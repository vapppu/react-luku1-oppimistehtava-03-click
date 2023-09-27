import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    setClicks( { 
      ...clicks, 
      left: clicks.left + 1 
    })
  }

    const handleRightClick = () => {
      setClicks({ 
        ...clicks, 
        right: clicks.right + 1 
      })
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
    </div>
  )
}

export default App
