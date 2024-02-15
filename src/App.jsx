import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <ContactForm/>
    </div>
  )
}

export default App