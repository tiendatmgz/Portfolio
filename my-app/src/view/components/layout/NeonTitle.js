import React from 'react'

const NeonTitle = ({ className, children, href, spanAfter ,target }) => {
    //spanAfter = # or /
    // href = jump to Component by id
    return (
        <h1 className={`${className || ''} flex items-center gap-2 justify-center`}>
            <a href={href} className='about-me-title text-2xl md:text-4xl text-cyan-500 flex gap-4 items-center' target={!!target ? target :''}>
                {children}
                {!!spanAfter ? <span className='span-after ml-2'>{spanAfter}</span> : ''}
            </a>
        </h1>
    )
}

export default NeonTitle