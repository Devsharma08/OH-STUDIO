import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { heroItems, companyLogo } from '../assets'

const Hero = () => {
  const containerRef = useRef(null);
  // Double the items for the loop
  const duplicatedItems = [...heroItems, ...heroItems];
  const controls = useAnimation();

  const startScrolling = () => {
    controls.start({
      x: '-50%', 
      transition: { duration: 10, repeat: Infinity, ease: 'linear' }
    });
  };

  useEffect(() => {
    startScrolling();
  }, []);

  return (
    <div className='relative overflow-hidden w-full py-5 bg-[#fafafa] select-none'>
      <motion.div 
        // DRAG CONFIG
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }} 
        dragElastic={0.05}
        
        // ANIMATION & EVENTS
        animate={controls}
        onDragStart={() => controls.stop()}
        onDragEnd={() => startScrolling()} 
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => startScrolling()}
        
        className='flex cursor-grab active:cursor-grabbing'
      >
        {duplicatedItems.map((item, index) => {
          const logoData = companyLogo[index % companyLogo.length];

          return (
            <div key={index} className='flex-shrink-0 px-2 w-full md:w-1/2 lg:w-[400px]'>
              {/* UPPER PORTION */}
              <div className='flex items-center gap-3 mb-4'>
                <img 
                  src={logoData?.logo} 
                  alt={logoData?.name} 
                  className='w-10 h-10 rounded-md object-contain border border-neutral-100 pointer-events-none' 
                />
                <div className='flex flex-col'>
                  <h3 className='text-[13px] font-bold leading-none'>{logoData?.name}</h3>
                  <p className='text-[11px] text-[#9C9C9C] mt-1'>{logoData?.tagline}</p>
                </div>
              </div>

              {/* LOWER PORTION: Media */}
              <div className='relative w-full aspect-square overflow-hidden rounded-3xl bg-neutral-100 pointer-events-none'>
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className='w-full h-full object-cover' 
                  />
                ) : (
                  <video
                    src={item.src}         
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  )
}

export default Hero