import React from 'react'

const ItemSkillWrapper = ({ logoPath, iName }) => {
    return (
        <div className='skill-tech flex flex-col gap-2 items-center'>
            <img src={logoPath} alt={iName} className='tech-icon h-14 w-14' />
            <i className='tech-text text-center text-sm'>{iName}</i>
        </div>
    )
}

export default ItemSkillWrapper