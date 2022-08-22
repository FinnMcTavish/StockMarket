import React from 'react'
import NavBar from './components/NavBar'
import './components/MyProfile.css'
import ProfileCard from './components/ProfileCard'
function MyProfile() {
  return (
    <section className='prof'>
      <NavBar/>
      <ProfileCard/>
    </section>
    
  )
}

export default MyProfile