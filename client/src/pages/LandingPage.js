import React from 'react'
import Header from '../Components/Header'
import BtnGrp from '../Components/BtnGrp'
import Form from '../Components/Form'
import StackedCards from '../Components/Blogs/Stack'
function LandingPage() {
  return (
    <>
      <Header/>
      <div className='flex'>
      <BtnGrp/>
      <StackedCards/>
     <div className='ml-auto -mt-16 z-20'>
      <Form/>
      </div>
      </div>
    
      
      
    </>
  )
}

export default LandingPage
