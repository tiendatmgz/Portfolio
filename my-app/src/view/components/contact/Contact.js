import React from 'react'
import reactIcon from '../../assets/image/react.png'
import tailwindcssIcon from '../../assets/image/tailwind-css.png'
import jsIcon from '../../assets/image/js.png'
const Contact = () => {
    return (
        <section id='contact' className=' bg-black flex flex-col items-center justify-between  text-lg pt-6  px-6 border-b-4 border-cyan-700 pb-20'>
            <h1 className='text-5xl font-semibold text-white mt-24 '>Contact me</h1>
            <p className='my-12 '>You can get in touch with me at <span className='underline decoration-wavy decoration-lime-300'>any time</span>; I'm interested in new opportunities. If you have any questions, don't hesitate to ask me:</p>
            <ul className='contact-box container-shadow list-none  rounded-xl'>
                <li className='flex'>
                    <a href='https://www.linkedin.com/in/v%C5%A9-ti%E1%BA%BFn-%C4%91%E1%BA%A1t-4b27222a0/' className='p-5 w-full text-sm sm:text-lg' target='_blank' rel="noreferrer">
                        <i className="icon-hover-moveup fa-brands fa-linkedin-in fa-2xl mr-4"></i>LinkedIn
                    </a>
                </li>
                <li className='flex'>
                    <a href='https://github.com/tiendatmgz' className='p-5 w-full text-sm sm:text-lg' target='_blank' rel="noreferrer">
                        <i className="icon-hover-moveup fa-brands fa-github fa-2xl mr-4"></i>Github
                    </a>
                </li>
                <li className='flex'>
                    <a href='tel:0967454932' className='p-5 w-full text-sm sm:text-lg' >
                        <i className="icon-hover-moveup fa-solid fa-phone  fa-2xl mr-4"></i>0967454932
                    </a>
                </li>
                <li className='flex'>
                    <a href='mailto:tiendatyenbai2001@gmail.com' className='p-5 w-full text-sm sm:text-lg' >
                        <i className="icon-hover-moveup fa-solid fa-envelope fa-2xl mr-4"></i>tiendatyenbai2001@gmail.com
                    </a>
                </li>
            </ul>

            {/* {------------------------------------------------------------ } */}
            <div className='border-t border-cyan-700 mt-24 pt-12 w-full flex flex-col items-center justify-center gap-12'>

                <div className='text-center'>
                    <p className='mb-4'>
                        Build with:
                    </p>
                    <ul className='flex flex-wrap items-center justify-center gap-3 '>
                        <li className='flex gap-1 '>
                            <img className='h-7 w-7' src={jsIcon} alt='Tailwind CSS' /><span className='underline decoration-lime-300 decoration-wavy'>Javascript</span>
                        </li>

                        <li className='flex gap-1 decoration-lime-300 decoration-wavy'>
                            <img className='h-7 w-7' src={reactIcon} alt='React' /><span className='underline decoration-lime-300 decoration-wavy'>React </span>
                        </li>
                        <li className='flex gap-1 '>
                            <img className='h-7 w-7' src={tailwindcssIcon} alt='Tailwind CSS' /><span className='underline decoration-lime-300 decoration-wavy'>Tailwind CSS</span>
                        </li>
                    </ul>
                </div>
                <p>Vu Tien Dat</p>
            </div>
        </section>
    )
}

export default Contact