import React from 'react'
import portfolio from '../../assets/image/portfolio.png'
import dsuit from '../../assets/image/Dsuit.png'
import pokemon from '../../assets/image/pokemon-library.png'
// import NeonTitle from '../layout/NeonTitle'

function FigureBox({ name, skillList, sourceLink, webLink, imgPath }) {
    return (
        <li className='max-w-2xl '>
            <figure className='relative group/figure'>
                <img src={imgPath} alt='icon' className='duration-200 sm:group-hover/figure:blur-lg group-hover/figure:duration-200' />
                <figcaption className=' sm:absolute  top-0  w-full h-full flex items-center justify-center flex-col gap-5 p-8 group-hover/figure:opacity-100 group-hover/figure:scale-100 sm:opacity-0 sm:scale-90 duration-200 origin-bottom'>
                    <h1 className=' text-xl md:text-3xl lg:text-5xl font-semibold text-yellow-400'>{name}</h1>
                    <ul className='flex gap-4 flex-wrap justify-center underline decoration-wavy decoration-lime-300'>
                        {skillList.map(i => {
                            return <li key={i} className='text-white'>{i}</li>
                        })}
                    </ul>
                    <div className='w-full flex items-center justify-evenly my-6 text-yellow-500'>
                        <a href={webLink} className='group/tranform-icon w-14 flex flex-col items-center' target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-arrow-up-right-from-square text-4xl group-hover/tranform-icon:duration-200 duration-200 group-hover/tranform-icon:-translate-y-2 "></i>
                            <span className='sm:invisible text-xs group-hover/tranform-icon:visible'>Website</span>
                        </a>
                        <a href={sourceLink} className='group/tranform-icon w-14 flex flex-col  items-center' target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-code text-4xl group-hover/tranform-icon:duration-200 duration-200 group-hover/tranform-icon:-translate-y-2"></i>
                            <span className='hiden-text sm:invisible text-xs group-hover/tranform-icon:visible'>source</span>
                        </a>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}
const Project = () => {
    return (
        <section id='project' className='bg-gradient-to-l from-black to-sky-900 border-y-4 border-cyan-700 py-36'>
            <h1 className='text-lg md:text-2xl lg:text-4xl font-semibold flex items-center justify-center gap-4  text-cyan-500 mx-3 mb-7'>These are some of my personal projects 🤠</h1>
            <ul className='flex flex-wrap  items-center justify-center px-8 py-32'>
                <FigureBox
                    name={'My Portfolio'}
                    imgPath={portfolio}
                    skillList={['Javascript', 'React', 'TailwindCSS']}
                    webLink={'https://dat-portfolio-5b957.web.app/'}
                    sourceLink={'https://github.com/tiendatmgz/Portfolio'}
                />
                <FigureBox
                    name={'Pokemon Library'}
                    imgPath={pokemon}
                    skillList={['Javascript', 'React', 'TailwindCSS', 'RESTful API']}
                    webLink={'https://pokemon-library-fe914.web.app/'}
                    sourceLink={'https://github.com/tiendatmgz/pokemon_library'}
                />
                <FigureBox
                    name={'D-suit E-Comm'}
                    imgPath={dsuit}
                    skillList={['Javascript', 'React', 'TailwindCSS', 'Node.Js', 'Expressjs', 'Mongodb']}
                />
            </ul>
        </section>
    )
}

export default Project