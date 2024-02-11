import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>WHERE MUSCLES MEET MERRIMENT!</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Solo<span className='text-blue-400'> - Fit !</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'> a joyous symphony where strength and merriment meet. <span className='text-blue-400 font-medium'>  Push-ups pulse with pride, runs become victory laps. </span> This journey sculpts not just the body, but the soul, in a vibrant dance of well-being. <span className='text-blue-400 font-medium'> Find your rhythm, unleash your inner roar  </span>  - solo fitness, where you flourish and soar! </p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
