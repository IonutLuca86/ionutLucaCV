
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Work from './components/Work'
import Education from './components/Education'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Languages from './components/Languages'
import Contact from './components/Contact'


function App() {


  return (
    <>
    <Navbar />
   <div className='main-container'> 
    
     <Intro />
    <hr width="100%" color="#ea445a" size="1px"/>
     
      <section id="about"><About /></section>      
      <section id="work"><Work /></section>
      <section id="skills"><Education />
      <Languages/>
      <Skills/>
      <Interests /></section>
      <section id="contact"><Contact/></section>
   </div>
   </>
  )
}

export default App
