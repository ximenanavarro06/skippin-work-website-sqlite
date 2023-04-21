import { useState, useEffect } from 'react'
import './App.css'
import HomeList from './HomePage/HomeList'

function App() {
  const [homes, setHomes] = useState([])

  useEffect(() => {
    fetch("/home_pages")
    .then((r) => r.json())
    .then(homesData => {
        setHomes(homesData)
    })
}, [])
console.log(homes)

  return (
    <div className="App">
      <h1>Skippin Work</h1>
      <HomeList homes={homes}/>
    </div>
  )
}

export default App
