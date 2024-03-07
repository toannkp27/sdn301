import React from 'react'
import Footer from '../components/Footer'
import HeaderBar from '../components/HeaderBar'

const DefaultLayout = ({children}) => {
  return (
    <div >
        <HeaderBar/>
        {children}
        <Footer/>
    </div>
    
  )
}

export default DefaultLayout