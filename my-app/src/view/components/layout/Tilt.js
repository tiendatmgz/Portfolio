import React from 'react'
import Tilt from 'react-parallax-tilt';
import logo from '../../assets/image/TIENDAT-MGZ-black.png'

const Tiltname = () => {
    return (
        <div className=' overflow-hidden border-b-4 border-cyan-700'>
            <Tilt className='w-full flex justify-center'>
                <img src={logo} alt='logo' className='max-h-[600px]' />
            </Tilt>
        </div>
    )
}

export default Tiltname
