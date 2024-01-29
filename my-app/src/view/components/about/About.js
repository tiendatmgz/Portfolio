import React from 'react'
import HighLightText from '../layout/HighLightText'
import NeonTitle from '../layout/NeonTitle'
import ItemSkillWrapper from '../layout/ItemSkillWrapper'
import expressLogo from '../../assets/image/express.png'
import nodejsLogo from '../../assets/image/node-js.png'
import avatar from '../../assets/image/avartar.jpg'
import firebase from '../../assets/image/firebase.png'
import github from '../../assets/image/github.png'
// import github from '../../assets/image/github.png'

import { FaCode, FaFilm, FaMusic, FaGamepad, FaMugHot, FaMapLocationDot, FaMoneyBillWave, FaShuttleSpace, FaDisplay, FaServer, FaListOl, FaDatabase } from "react-icons/fa6";
import { FieldsetBig, FieldsetChild, FieldsetNormal } from '../layout/Fieldset'

const About = () => {
    const interestItemStyle = 'flex items-center gap-2 text-xl font-semibold'
    return (
        <section id='about' className='bg-gradient-to-r from-black to-cyan-900 flex flex-col  items-center px-4 pb-20r-b-4 border-cyan-700 py-36'>
            <div id='about-me' className='about-container flex flex-wrap justify-center items-center  gap-8 pt-24' >
                <div className='avatar'>
                    <img src={avatar} alt='avatar'
                        className=' object-cover rounded-full w-80 min-w-full aspect-square ' />
                </div>
                <div className=' max-w-4xl text-lg'>
                    <NeonTitle href={'#about-me'} >
                        <span className='font-bold'>About Me</span>
                    </NeonTitle>
                    <p className='about-me-p'>
                        I'm <HighLightText>Vu Tien Dat</HighLightText>, also known as <HighLightText>tiendatmgz</HighLightText>, a passionate and young <HighLightText>self-taught developer</HighLightText> who enjoys <HighLightText>exploring</HighLightText> and <HighLightText>trying out</HighLightText> the <HighLightText>latest technologies</HighLightText>.
                    </p>
                    <p className='about-me-p'>
                        Capable of developing <HighLightText>full-stack web applications</HighLightText> using <HighLightText className={'italic'}>JavaScript</HighLightText> .
                    </p>
                    <p className='about-me-p'>
                        I also have a keen interest in <HighLightText>Web Development</HighLightText> and <HighLightText>Communications</HighLightText>; I've mastered <HighLightText>front-end</HighLightText> and <HighLightText>back-end</HighLightText> technologies that enabled me to create <span>exciting projects</span>.
                    </p>
                </div>
            </div>

            {/* interest */}
            <div className='pt-20'>

                <FieldsetNormal title={'Interests'}>
                    <ul className='interest-list flex  flex-wrap gap-8 justify-around items-center w-full  text-cyan-600 p-8'>
                        <li className={interestItemStyle}><FaCode className='text-2xl' /><span>Coding</span></li>
                        <li className={interestItemStyle}><FaFilm className='text-2xl' /> Movies</li>
                        <li className={interestItemStyle}><FaMusic className='text-2xl' /> Music</li>
                        <li className={interestItemStyle}><FaGamepad className='text-2xl' /> Esports</li>
                        <li className={interestItemStyle}><FaMugHot className='text-2xl' /> Coffe</li>
                        <li className={interestItemStyle}><FaMapLocationDot className='text-2xl' /> Travel</li>
                        <li className={interestItemStyle}><FaMoneyBillWave className='text-2xl' /> </li>
                    </ul>
                </FieldsetNormal>
            </div>

            {/* skill */}
            <div id='skill-set' className='inline-block'>
                <div className='pt-36'>
                    <NeonTitle href={'#skill-set'} >
                        <FaShuttleSpace className='text-4xl' />
                        <span className='font-bold '>Coding Skill Set</span>
                    </NeonTitle>
                </div>

                {/* front end */}
                <div id='front-end' className='pt-36'>
                    <FieldsetBig id={'front-end'} icon={<FaDisplay className='text-3xl' />} title={"Front-End"} spanAfter={<i class="fa fa-gg"></i>}>
                        <FieldsetChild title={"Template"}>
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} iName={'HTML5'} />
                        </FieldsetChild>
                        <FieldsetChild title={"Style"}>
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} iName={'CSS'} />
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} iName={'SASS'} />
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'} iName={'Tailwind CSS'} />
                        </FieldsetChild>
                        <FieldsetChild title={"Programming"}>
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} iName={'Javascript'} />
                            <FieldsetChild title={"Frameworks / Libraries"}>
                                <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} iName={'React'} />
                            </FieldsetChild>
                        </FieldsetChild>
                    </FieldsetBig>
                </div>
                {/* backend */}
                <div id='back-end' className='pt-36'>
                    <FieldsetBig id={'back-end'} icon={<FaServer className='text-3xl' />} title={"Back-End"} spanAfter={<i class="fa fa-gg"></i>}>
                        <ItemSkillWrapper logoPath={nodejsLogo} iName={'Node.js'} />
                        <ItemSkillWrapper logoPath={expressLogo} iName={'Express'} />
                        <FieldsetChild icon={<FaDatabase />} title={"Database"}>
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'} iName={'Mongodb'} />
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'} iName={'Oracle'} />
                        </FieldsetChild>
                    </FieldsetBig>
                </div>

                {/* Communications */}
                <div id='other' className='pt-36'>
                    <FieldsetBig id={'other'} icon={<FaListOl className='text-3xl' />} title={"Other"} spanAfter={<i class="fa fa-gg"></i>}>
                        <ItemSkillWrapper logoPath={firebase} iName={'Firebase'} />
                        <ItemSkillWrapper logoPath={github} iName={'Github'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'} iName={'Git'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'} iName={'Docker'} />
                        {/* <ItemSkillWrapper logoPath={'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https:%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb5%2FDBeaver_logo.svg%2F1500px-DBeaver_logo.svg.png&w=828&q=50'} iName={'Dbeaver'} /> */}
                    </FieldsetBig>
                </div>
            </div>
        </section>
    )
}
export default About