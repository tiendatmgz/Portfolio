import React from 'react'
import './home.css'
const Home = () => {
    return (
        <section id='home' className='min-h-screen flex justify-center items-center border-b-4 border-cyan-700'>
            <div className='bghome-onload flex flex-col justify-center items-center p-12 '>
                <h1 className='float-left text-6xl py-12 font-semibold text-cyan-500'>
                    Hello World, I'm
                    <span className='myname text-cyan-300 italic'>Vu Tien Dat</span>
                </h1>
                <h2 className='py-8 text-4xl font-bold text-cyan-700'>
                    An{' '}
                    <span className='text-cyan-300 italic underline decoration-lime-300 decoration-wavy'>enthusiast</span>{' '}
                    coder of the{' '}
                    <span className='editing-pointer text-cyan-300 italic underline decoration-lime-300 decoration-wavy'> cosmos </span>
                </h2>
                <a href='#about' className='m-16'>
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