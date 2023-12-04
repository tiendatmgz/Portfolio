import React from 'react'
import HighLightText from '../layout/HighLightText'
import NeonTitle from '../layout/NeonTitle'
import ItemSkillWrapper from '../layout/ItemSkillWrapper'
import expressLogo from '../../assets/image/express.png'
import supabaseLogo from '../../assets/image/supabase.png'
import nodejsLogo from '../../assets/image/node-js.png'
import nextJsLogo from '../../assets/image/Next.js.png'

import { FieldsetBig, FieldsetChild, FieldsetNormal } from '../layout/Fieldset'
import './about.css'

const About = () => {
    const interestItemStyle = 'flex items-center gap-2 text-xl font-semibold'
    return (
        <section id='about' className='flex flex-col  items-center px-4 pb-20 gap-20 border-b-4 border-cyan-700 '>
            <div className='about-container flex flex-wrap justify-center items-center  gap-8 pt-24' >
                <div className='avatar'>
                    <img src='https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-anh-1.jpg ' alt='avatar'
                        className=' object-cover rounded-full w-80 min-w-full aspect-square ' />
                    <p className='text-sm text-center mt-3'>GitHub Picture</p>
                </div>
                <div id='about-me' className=' max-w-4xl text-lg'>
                    <NeonTitle href={'#about-me'} >
                        <span className='font-bold'>About Me</span>
                    </NeonTitle>
                    <p className='about-me-p'>
                        I'm <HighLightText>Vu Tien Dat</HighLightText>, also known as <HighLightText>Datvt</HighLightText>, a passionate and young <HighLightText>self-taught developer</HighLightText> who enjoys <HighLightText>exploring</HighLightText> and <HighLightText>trying out</HighLightText> the <HighLightText>latest technologies</HighLightText>.
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
            <FieldsetNormal title={'Interests'}>
                <ul className='interest-list flex  flex-wrap gap-8 justify-around items-center w-full  text-cyan-600 '>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">data_object</span><span>Coding</span></li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">theaters</span> Movies</li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">headphones</span> Music</li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">sports_esports</span> Video Games</li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">local_cafe</span> Coffe</li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">mode_of_travel</span> Travel</li>
                    <li className={interestItemStyle}><span className="material-symbols-outlined text-3xl">attach_money</span> </li>
                </ul>
            </FieldsetNormal>

            {/* skill */}
            <div id='skill-set' className='inline-block'>
                <NeonTitle href={'#skill-set'} >
                    <span className="material-symbols-outlined text-4xl">signal_cellular_alt</span>
                    <span className='font-bold'>Coding Skill Set</span>
                </NeonTitle>

                {/* front end */}
                <FieldsetBig id={'front-end'} icon={'desktop_windows'} title={"Front-End"} spanAfter={<i class="fa fa-gg"></i>}>

                    <FieldsetChild title={"Template"}>
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} iName={'HTML5'} />
                    </FieldsetChild>

                    <FieldsetChild title={"Style"}>
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} iName={'CSS'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'} iName={'Sass'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'} iName={'Tailwind CSS'} />
                    </FieldsetChild>

                    <FieldsetChild title={"Programming"}>
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} iName={'Javascript'} />
                        <FieldsetChild title={"Frameworks / Libraries"}>
                            <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} iName={'React'} />


                        </FieldsetChild>
                    </FieldsetChild>
                </FieldsetBig>

                {/* backend */}
                <FieldsetBig id={'back-end'} icon={'dns'} title={"Back-End"} spanAfter={<i class="fa fa-gg"></i>}>
                    <ItemSkillWrapper logoPath={nodejsLogo} iName={'Node.js'} />
                    <ItemSkillWrapper logoPath={expressLogo} iName={'Express'} />
                    <FieldsetChild icon={'database'} title={"Database"}>
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'} iName={'Mongodb'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'} iName={'MySQL'} />
                        <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'} iName={'Oracle'} />
                    </FieldsetChild>
                </FieldsetBig>


                {/* Communications */}
                <FieldsetBig id={'other'} icon={'tag'} title={"Other"} spanAfter={<i class="fa fa-gg"></i>}>
                    <ItemSkillWrapper logoPath={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'} iName={'Docker'} />
                    <ItemSkillWrapper logoPath={'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https:%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb5%2FDBeaver_logo.svg%2F1500px-DBeaver_logo.svg.png&w=828&q=50'} iName={'Dbeaver'} />
                </FieldsetBig>




            </div>
        </section>
    )
}
export default About