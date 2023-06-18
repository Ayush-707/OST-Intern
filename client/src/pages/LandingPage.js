import React from 'react'
import Header from '../Components/Header'
import BtnGrp from '../Components/BtnGrp'
import Form from '../Components/Form'
import StackedCards from '../Components/Blogs/Stack'
//import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
function LandingPage() {
  return (
    <>
      <Header/>
      <div className='flex'>
      <BtnGrp/>
      <StackedCards/>
     
      <Form/>
      </div>
      
    
      
      
    </>
  )
}

export default LandingPage
