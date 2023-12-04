import React from 'react'

const HighLightText = ({ className,children }) => {
    return (
        <span className={className + ' text-cyan-300'}>
            {children}
        </span>
    )
}
// const HighLightText = ({ children }) => {
//     return (
//         <span className="text-emerald-200">
//             {children}
//         </span>
//     );
// }
export default HighLightText