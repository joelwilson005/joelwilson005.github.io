import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Joel Wilson</h1>
      <h2>Website coming soon.</h2>
      <div className="card">
        <h3>
          Here I will put on show all that I've been working on
        </h3>
      </div>
      <div className='card'>
        <p>This webpage was made using React.js and Vite</p>
      </div>

    </div>
  )
}

export default App
