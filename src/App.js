import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Projects from '../components/Projects'
import {contact, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Home from './pages';
// import SignIn from './pages/signin'

function App() {
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} /> 
    <Navbar toggle={toggle} />
    <HeroSection />
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <Projects />
    <InfoSection {...contact} />
    <Footer />
    </>
  );
}

export default App;
