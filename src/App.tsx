import type { JSX } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./components/three/Showcase";

gsap.registerPlugin(ScrollTrigger)

const App = (): JSX.Element => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  )
}

export default App
