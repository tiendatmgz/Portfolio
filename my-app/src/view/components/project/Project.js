import React from 'react'
import projectImg from '../../assets/image/portfolio.png'
import dsuit from '../../assets/image/Dsuit.png'
// import NeonTitle from '../layout/NeonTitle'

function FigureBox({ name, skillList, sourceLink, webLink, imgPath }) {
    return (
        <li className='max-w-2xl '>
            <figure className='relative'>
                <img src={imgPath} alt='icon' />
                <figcaption className='absolute top-0  w-full h-full flex items-center justify-center flex-col gap-5 p-8'>
                    <h1 className='text-5xl font-semibold text-yellow-400'>{name}</h1>
                    <ul className='flex gap-4 flex-wrap justify-center underline decoration-wavy decoration-cyan-600'>
                        {skillList.map(i => {
                            return <li key={i} className='text-yellow-400'>{i},</li>
                        })}
                    </ul>
                    <div className='w-full flex items-center justify-evenly my-6 text-yellow-500'>
                        <a href={webLink || ''} className='tranform-icon w-14 flex flex-col items-center'>
                            <i class="fa-solid fa-arrow-up-right-from-square text-4xl"></i>
                            <span className='hiden-text invisible text-xs'>Website</span>
                        </a>
                        <a href={sourceLink || ''} className='tranform-icon w-14 flex flex-col  items-center'>
                            <i class="fa-solid fa-code text-4xl"></i>
                            <span className='hiden-text invisible text-xs'>source</span>
                        </a>
                    </div>
                </figcaption>
            </figure>
        </li>
    )
}
const Project = () => {
    return (
        <section id='project' className='bg-gradient-to-t from-indigo-950 to-sky-900 border-b-4 border-cyan-700'>
            <h1 className='text-4xl font-semibold flex items-center justify-center gap-4 pt-24 text-cyan-500 mx-3 mb-7'>These are some of my personal projects 💻</h1>
            <ul className='flex flex-wrap  items-center justify-center px-8 py-32'>

                <FigureBox name={'My Portfolio'} imgPath={projectImg} skillList={['Javascript', 'React', 'TailwindCSS']} />
                <FigureBox name={'D-suit E-Comm'} imgPath={dsuit} skillList={['Javascript', 'React', 'TailwindCSS', 'Node.Js', 'Expressjs', 'Mongodb']} />

            </ul>
        </section>
    )
}

export default Project