import React from 'react'
import NeonTitle from './NeonTitle'

const FieldsetNormal = ({ children, title }) => {
    return (
        <fieldset className='py-4 px-3 border border-cyan-700 rounded-lg max-w-7xl bg-slate-950'>
            <legend className='text-xl text-cyan-300 font-semibold px-2'>{title}</legend>
            {children}
        </fieldset>
    )
}
const FieldsetBig = ({ id, icon, spanAfter, children, title }) => {
    //spanAfter = anything
    return (
        <fieldset className='container-shadow flex flex-wrap flex-col sm:flex-row justify-evenly items-center gap-6 p-4 sm:p-8  border border-cyan-700 rounded-lg  bg-slate-950'>
            <legend className='px-2 text-xl text-teal-300 '>
                <NeonTitle href={'#' + id} spanAfter={spanAfter}>

                    {icon}
                    <span className='text-xl md:text-3xl'>{title}</span>
                </NeonTitle>
            </legend>
            {children}
        </fieldset>
    )
}
const FieldsetChild = ({ icon, children, title }) => {

    return (
        <fieldset className={`container-shadow mb-12 mx-4 flex flex-wrap flex-col sm:flex-row justify-evenly items-center gap-6 p-4 sm:p-8 border  border-cyan-700 pink-900 rounded-lg max-w-7xl bg-black`}>
            <legend className={`flex justify-evenly items-center gap-2 md:text-xl text-lime-300 pink-500  px-2`}>
                {!!icon && icon}
                <span>{title}</span>
            </legend>
            {children}
        </fieldset>
    )
}


export { FieldsetNormal, FieldsetBig, FieldsetChild }