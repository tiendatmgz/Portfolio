import React, { useState } from 'react'
import logo from '../../assets/image/TIENDAT-MGZ-logo1.png'

const Navbar = () => {
    const [selectedChildIndex, setSelectedChildIndex] = useState(0);
    const [showSmNav, setShowSmNav] = useState(false)

    const handleClickShowSmNav = () => {
        setShowSmNav(!showSmNav)
        console.log(showSmNav)
    }

    window.onscroll = function () { myFunction() };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        // -----------
        let about = document.getElementById("about");
        let project = document.getElementById("project");
        let contact = document.getElementById("contact");

        if (about.offsetTop < (window.scrollY + about.offsetTop) && (window.scrollY + about.offsetTop) < project.offsetTop) {
            setSelectedChildIndex(1)
        } else if (project.offsetTop < (window.scrollY + window.innerHeight) && (window.scrollY + window.innerHeight) < contact.offsetTop) {
            setSelectedChildIndex(2)
        } else if (contact.offsetTop < (window.scrollY + window.innerHeight)) {
            setSelectedChildIndex(3)
        } else {
            setSelectedChildIndex(0)

        }
    }
    let classCss = 'hover:bg-white hover:bg-opacity-10 md:lg:text-xl lg:text-2xl capitalize  flex justify-center items-center gap-2 rounded-full w-full p-2'
    return (
        <>
            <div className='block md:hidden'>
                <div className=" Scroll-Indicator w-screen h-2  left-0 fixed z-10 backdrop-blur-xl ">
                    <div id="myBar" className=" h-2  w-0 bg-yellow-400 shadow-xl"></div>
                </div>
                <nav className='fixed flex flex-col items-center left-0 w-screen z-10 p-5  mt-2 backdrop-blur-xl text-cyan-300'>
                    <div className='flex justify-between w-full'>
                        <img src={logo} alt='logo' className='h-10 rounded-full border-4 border-dashed ' />
                        <div onClick={handleClickShowSmNav} className='h-10 flex items-center'>
                            <div className={`${showSmNav ? 'before:rotate-45 before:top-0 after:-rotate-45 after:top-0 bg-none before:duration-200 after:duration-200 duration-200 ' : 'bg-cyan-300'}  before:duration-200 after:duration-200 duration-200 relative h-1 w-6 rounded-full  before:absolute before:h-1  before:w-6 before:-top-2 before:rounded-full before:bg-cyan-300 after:absolute after:h-1  after:w-6 after:-bottom-2 after:rounded-full after:bg-cyan-300`}></div>
                        </div>
                    </div>
                    <ul className={`${showSmNav ? 'scale-100 h-full block duration-200' : ' scale-0 h-0 duration-200'} origin-top top-full left-0 w-full backdrop-blur-xl`}>
                        <li className='w-full'>
                            <a href='#home' className='flex items-center justify-center w-full p-4 gap-4 hover:bg-white hover:bg-opacity-10'>
                                <i className="  fa-solid fa-house"></i>
                                <span className=''>home</span>
                            </a>
                        </li>
                        <li className='w-full'>
                            <a href='#about' className='flex items-center justify-center w-full p-4 gap-4 hover:bg-white hover:bg-opacity-10'>
                                <i className="  fa-solid fa-address-card"></i>
                                <span className=''>about</span>
                            </a>
                        </li>
                        <li className='w-full'>
                            <a href='#project' className='flex items-center justify-center w-full p-4 gap-4 hover:bg-white hover:bg-opacity-10'>
                                <i className="  fa-solid fa-code"></i>
                                <span className=''>projects</span>
                            </a>
                        </li>
                        <li className='w-full'>
                            <a href='#contact' className='flex items-center justify-center w-full p-4 gap-4 hover:bg-white hover:bg-opacity-10'>
                                <i className="  fa-solid fa-phone"></i>
                                <span className=''>contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='hidden md:block'>
                <div className=" Scroll-Indicator w-screen h-2  left-0 fixed z-10 backdrop-blur-xl ">
                    <div id="myBar" className=" h-2  w-0 bg-yellow-400 shadow-xl"></div>
                </div>
                <nav id='navbar' className='fixed flex gap-8 left-0 w-screen z-10 py-5 px-24 mt-2 backdrop-blur-xl text-cyan-300' >
                    <img src={logo} alt='logo' className='w-16 rounded-full border-4 border-dashed ' />
                    <div className='flex gap-4 w-full   '>
                        <a className={(selectedChildIndex === 0 ? 'nav-selected ' : '') + classCss} href='#home'>
                            <i className="  fa-solid fa-house"></i>
                            <span className=''>home</span>
                        </a>
                        <a className={(selectedChildIndex === 1 ? 'nav-selected ' : '') + classCss} href='#about'>
                            <i className="  fa-solid fa-address-card"></i>
                            <span className=''>about</span>
                        </a>
                        <a className={(selectedChildIndex === 2 ? 'nav-selected ' : '') + classCss} href='#project'>
                            <i className="  fa-solid fa-code"></i>
                            <span className=''>projects</span>
                        </a>
                        <a className={(selectedChildIndex === 3 ? 'nav-selected ' : '') + classCss} href='#contact'>
                            <i className="  fa-solid fa-phone"></i>
                            <span className=''>contact</span>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar