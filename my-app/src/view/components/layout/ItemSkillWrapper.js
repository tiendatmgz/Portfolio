import React from 'react'

const ItemSkillWrapper = ({ logoPath, iName }) => {
    return (
        <div className='skill-tech flex flex-col gap-2 items-center'>
            <div className=' flex items-center justify-center'>
                <img src={logoPath} alt={iName} className='tech-icon h-10 sm:h-14 object-cover' />

            </div>
            <i className='tech-text text-center text-sm'>{iName}</i>
        </div>
    )
}

export default ItemSkillWrapper