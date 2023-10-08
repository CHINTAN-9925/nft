import React from 'react'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Reviews from '../components/Reviews'
import Banner from '../components/Banner'
import Prising from '../components/Pricing'

const Home: React.FC = () => {
  return (
    <div>

      <Banner />

      {/* blue-chip-project */}
      <Projects />


      {/* pricing */}
      <Prising />


      {/* customer review */}
      <Reviews />

      {/* questions  */}
      <Faqs />

      {/* footer  */}
      <Footer />
    </div >
  )
}

export default Home
