import "./App.css"
import "./global.css"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"



function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const getPokemons = async () => {
      const request = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=800&offset=`)
      const response = await request.json()

      setPokemons(response)
     }

    getPokemons()
  },[])

console.log(pokemons)

  return (
    <div className="container-app">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
