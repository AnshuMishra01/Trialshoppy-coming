import Footer from './components/Footer'
import Header from './components/Header'
import Link from 'next/link'
import Head from 'next/head'


export default function index() {
  return (
    <>
      <Head>
        <title>TrialShoppy</title>
        <meta name="theme-color" content="#317EFB"/>
        <meta name="description" content="3MING will be a web3 games streaming platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="google-site-verification" content="-dhy-Elguzg2-ta4dqIwGsXc6RYwUjTqTC1pvN1wGDA" /> */}
        {/* <link rel="icon" type="image/png" href="https://3ming.space/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f460044c.png&w=1080&q=75"/>
        <link rel="apple-touch-icon" href="https://3ming.space/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f460044c.png&w=1080&q=75"></link> */}
      </Head>
    <main>
      {/* Header Component*/}
      <Header />

      <div id="contet">
        <div className='pt-10 sm:pt-15 md:pt-10 md:mt-8'>
        <h1 className="jt__text md:pl-20 text-2xl mt-20 md:ml-20 md:text-4xl text-white heading font-bold">&nbsp;&nbsp;&nbsp;A New <span className='text-red-400'>Attractive</span> </h1>
        <h1 className="jt__text md:pl-20 ml-2 text-2xl mt-4 md:ml-20 md:text-4xl text-white heading font-bold">&nbsp;&nbsp;&nbsp;and totally different</h1>
        </div>
        <h1 className="jt__text pl-4 md:svg-text md:pl-20 ml-5 text-4xl mt-4 md:ml-10 md:text-7xl text-white heading font-bold"><link href="https://fonts.googleapis.com/css?family=Russo+One" rel="stylesheet" />
        C<span className='text-red-400'>O</span>MING S<span className='text-red-400'>OO</span>N!!</h1>
        <hr className='hidden md:hr my-4 md:mr-20 h-1 w-60 mt-5'></hr>

        <h1 className="jt__text pl-3 md:pl-20 text-2xl mt-5 md:ml-20 md:text-4xl text-white font-bold heading">&nbsp;&nbsp;&nbsp;Way of <span className='text-red-400'>S</span>hopping</h1>
      <div className='jt__text text-white text-xl text-center mt-10 border-4 border-green-300 mx-20 rounded-2xl md:hidden'>
        <button className='button'><Link href="about">Learn More</Link></button>

      </div>
      <div className='jt__text pt-10 social'>
      <Footer />
      </div>
      
      </div>
    </main>
  </>
  )
}
