import React, { useState, useEffect } from 'react'

const PreLoader = () => {
    const [preLoader, setPreLoader] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreLoader(false)
        }, 4000)
    }, [])

    return (
        <div>
            {preLoader ? (
                <div className='h-screen w-full bg-gradient-to-tr from-white to-light-blue fixed bottom-0 top-0 right-0 z-30 flex justify-center items-center overflow-hidden'>
                    <img src="/assets/images/webp/footer-logo.webp" alt="preloader" className='duration-700 animate-bounce h-7 w-7 relative z-50' />
                </div>
            ) : null}
        </div>
    )
}

export default PreLoader

