import React from 'react'
const Home = () => {
    return (
        <section id='home' className='md:min-h-screen flex justify-center items-center border-b-4 border-cyan-700'>
            <div className='bghome-onload flex flex-col  items-center p-12 '>
                <h1 className='text-center lg:text-left text-2xl md:text-4xl lg:text-6xl py-12 pt-24 font-semibold text-cyan-500'>
                    <p className='text-4xl  md:text-6xl lg:text-8xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-900 uppercase '>Wellcome</p>
                    to my portfolio, I'm
                    <span className='myname text-cyan-300 italic'>Vu Tien Dat</span>
                </h1>
                <h2 className='py-8 text-lg gap-x-4 text-center flex flex-col md:flex-row md:text-2xl lg:text-4xl font-bold text-cyan-700'>
                    A{' '}
                    <span className='text-cyan-300 italic underline decoration-lime-300 decoration-wavy'>passionate</span>{' '}
                    and {' '}
                    <span className=' text-cyan-300 italic underline decoration-lime-300 decoration-wavy'> enthusiastic </span>
                    developer
                    <span className='editing-pointer'></span>
                </h2>
                <a href='#about' className='m-8 md:m-16'>
                    <div className='arrow-down'>
                        <span className='arrow-1' />
                        <span className='arrow-2' />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Home