import React, { useEffect, useState } from 'react'
import LottieImport from 'lottie-react'
import pngImg from './assets/eclipse.png'
import { headingLogo } from './assets'
import Hero from './components/Hero'

const Lottie = LottieImport.default || LottieImport;

const App = () => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/src/assets/lottie.json')
      .then(res => res.json())
      .then(data => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load animation:', err);
        setLoading(false);
      });
  }, []);

  return (
   <main className='app-viewport'>

    {/* header part */}
  <header className='w-full flex justify-between items-start'>
    {/* Text container */}
    <div className='heading-main max-w-3/5 text-balance md:max-w-1/2 w-full leading-[.95]'>
      A 
      <p className='inline-block mx-2'>
        <img src={pngImg} className='w-8 h-8 rounded-full bg-gray-500 pt-[3px] pl-[3px] object-contain' alt="image" />
      </p>
      designer working with startups globally. Currently steering the ship at {' '}
       <span className='text-black hover:text-black/60 transition-colors duration-200 cursor-pointer cursor-events-none'>
       <img src={headingLogo} className='w-9 h-9 inline-block rounded-full object-contain' alt="image" />
       {' '}
       Haptic.
       </span>
    </div>

    {/* Lottie logo container */}
    <div className='logo-wrapper'>
       {animationData && !loading && (
         <Lottie 
           loop={true} 
           autoPlay={true} 
           animationData={animationData} 
         />
       )}
    </div>
  </header>

  {/* hero section */}
  <section className='slider'>
       <Hero/>
  </section>
</main>
    
  )
}

export default App