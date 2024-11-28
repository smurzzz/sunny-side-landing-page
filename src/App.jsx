import About from "./components/About/About"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projectss/Projects"
import Services from "./components/Servicess/Services"

const App = () => {
  
  return (
    <div className='container'>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  )
}

export default App
