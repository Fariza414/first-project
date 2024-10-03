import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import InfoB from '../components/InfoB'
import PhotoBlock from '../components/PhotoBlock'

const mainPage = () => {
  return (
    <div>
      <NavBar/>
      <InfoB />
      <PhotoBlock />
      <Footer />
    </div>
  )
}

export default mainPage
