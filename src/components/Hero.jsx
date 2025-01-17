import React from 'react'
import Header from '../components/Header'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
    <div className='bg-hero-bg bg-cover lg:bg-[100% 100%] bg-no-repeat bg-center lg:h-[840.23px] relative' id='solution'>
      <Header/>
      <div className='container relative'>
        <div className='flex lg:flex-row flex-col gap-5 max-xl:pt-12'>
          <div className='lg:w-[705px] w-full flex flex-col justify-center items-center xl:pt-[166px] xl:pb-[250.23px]'>
            <h1 className='xl:text-7xl xl:leading-custom-6xl text-white text-center lg:text-6xl md:text-custom-2xl md:leading-custom-5xl text-custom-xl leading-10 font-bold'>Innovate, Automate, Accelerate </h1>
            <p className='sm:text-xl sm:leading-custom-4xl text-base font-normal text-center text-white sm:pt-6 pt-5'>Next Gen AI Automation to Scale Your Business.</p>
            <CustomButton text='Book A Call Now!' classStyle='sm:py-[19.5px] sm:px-[38.5px] py-4 px-7 sm:mt-6 mt-5' />
          </div>
          <div className='absolute right-[-57px] top-[60px] xl:block hidden'>
            <img className='max-w-[470px] h-[559px] w-full pointer-events-none animate-bounce duration-1000' src="/assets/images/webp/hero-main-image.webp" alt="hero-image" />
          </div>
          <div className='xl:hidden flex justify-center max-lg:pt-28'>
            <img className='w-full max-w-[470px] pointer-events-none animate-bounce duration-1000' src="/assets/images/webp/hero-main-image.webp" alt="hero" />
          </div>
        </div>
      </div>
      <div className='absolute left-0 bottom-0'>
        <img className='w-full max-w-[163px]' src="/assets/images/webp/hero-left-circle.webp" alt="circle" />
      </div>
    </div>
  )
}

export default Hero