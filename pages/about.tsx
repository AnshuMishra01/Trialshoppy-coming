import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

function about() {
  return (
    <div>
      <Header />
       
      <div>
        <h1 className='text-white text-2xl md:text-4xl font-bold pt-20 pb-10 text-center title'>
          About Us
        </h1>
        <div id="main">
          
       
        <h3 className='jt__text text-xl text-red-500 text-bold md:text-4xl text-center md:mx-20 md:pr-20 mt-10 about'>"A New, attractive and totally different way of Shopping"</h3><br></br><br></br>
        <p className='text-white text-center mx-4 md:text-3xl md:mx-20 md:pr-20 mt-1'>Offline shopping, waiting outside of the trial room for your turn can be exhausting and time-consuming.While online shopping offers a great deal of convenience to users but it fails to address a key aspect of the in-store experience i.e trying products on before purchasing them. We have come with a solution to this problem by creating a marketplace which allows users to try their products virtually before purchasing.We help users to make confident purchases and inbuilt voice.
        </p>
    </div>
   </div>
   <div className='ml-20 md:ml-10 mt-10'>
    <Footer />
   </div>
  </div>
  )
}

export default about