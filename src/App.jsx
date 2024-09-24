import { useState } from 'react'
import './App.css'
// import Counter from './components/Counter';
import NavBar from './components/NavBar';
import InfoBlock from './components/InfoBlock';
import InfoB from './components/InfoB';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

function App() {

  return (
    <div className='flex flex-col justify-between min-h-[100vh]'>

      <NavBar />
      <InfoB/>
      <SocialMedia />
      <Footer />
      
    </div>
  )
}

export default App
