import type { NextPage } from 'next'
import Title from '../components/Title'
import Contacts from '../components/Contacts'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import About from '../components/About'
import Project from '../components/Projects'

const Home: NextPage = () => {

  // const handleCloseNavMenu = (href) => {
    

  // };

  return (
    <>
      <NavBar />
      <Title />
      <About/>
      <Skills />
      <Project/>
      <Contacts />

    </>
  )
}

export default Home
