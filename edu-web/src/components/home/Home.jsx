import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
        <Hero />
        <AboutCard />
        <HAbout />
        <Testimonal />
        <Hblog />
    </>
  )
}

export default Home