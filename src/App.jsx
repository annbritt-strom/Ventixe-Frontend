import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<EventPage />} />
        <Route path='/events/:id' element={<EventDetailsPage />} />
        <Route path='/events/booking/:id' element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App
