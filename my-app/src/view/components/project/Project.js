import React from 'react'
import './project.css'
import projectImg from '../../assets/image/portfolio.png'
// import NeonTitle from '../layout/NeonTitle'

function FigureBox({ name, skillList, sourceLink, webLink, imgPath }) {
    return (
        <li className='max-w-2xl '>
            <figure className='relative'>
                <img src={imgPath} alt='icon' />
                <figcaption className='absolute top-0  w-full h-full flex items-center justify-center flex-col gap-5 p-8'>
                    <h1 className='project-name text-5xl font-semibold text-cyan-400'>{name}</h1>
                    <ul className='flex gap-4 underline decoration-wavy decoration-cyan-600'>
                        {skillList.map(i => {
                            return <li>#{i}</li>
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
        <section id='project' className='border-b-4 border-cyan-700'>
            <h1 className='text-4xl font-semibold flex items-center justify-center gap-4 pt-24 text-cyan-500 mx-3 mb-7'>These are some of my personal projects <span class="material-symbols-outlined text-4xl">sentiment_content</span></h1>
            <ul className='flex flex-wrap  items-center justify-center px-8 py-32'>

                <FigureBox name={'Portfolio'} imgPath={projectImg} skillList={['Javascript', 'React', 'TailwindCSS']}/>
                <FigureBox name={'Portfolio'} imgPath={projectImg} skillList={['Javascript', 'React', 'TailwindCSS']}/>
                <FigureBox name={'Portfolio'} imgPath={projectImg} skillList={['Javascript', 'React', 'TailwindCSS']}/>
                <FigureBox name={'Portfolio'} imgPath={projectImg} skillList={['Javascript', 'React', 'TailwindCSS']}/>
                
            </ul>
        </section>
    )
}

export default Project