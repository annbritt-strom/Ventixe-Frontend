import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const EventDetailsPage = () => {
  return (
    <div className='page-wrapper'>
      <Nav />
      <Header />
      <main>
         <h1>Event Title</h1>
      </main>
      <Footer />
    </div>
  )
}

export default EventDetailsPage
