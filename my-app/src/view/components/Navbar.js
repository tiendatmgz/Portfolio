import React, { useState } from 'react'

const Navbar = () => {
    const [selectedChildIndex, setSelectedChildIndex] = useState(0);

    window.onscroll = function () { myFunction() };
    function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
        // -----------
        // var pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        // let home = document.getElementById("home");
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
    let classCss = ' hover-nav-item text-2xl capitalize  flex justify-center items-center gap-2 rounded-full w-full p-2'
    return (
        <div className=''>
            <div class=" Scroll-Indicator w-screen h-2  left-0 fixed z-10 ">
                <div class=" h-2  w-0 " id="myBar"></div>
            </div>
            <nav id='navbar' className='fixed left-0 w-screen z-10 py-5 px-24 mt-2 backdrop-blur-md text-cyan-300' >
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
    )
}

export default Navbar


