import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
        <HeaderBar/>
        {children}
        <Footer/>
    </div>
    
  )
}

export default DefaultLayout