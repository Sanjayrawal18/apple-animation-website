import type { JSX } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"

const App = (): JSX.Element => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App
