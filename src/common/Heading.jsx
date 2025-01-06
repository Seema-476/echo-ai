import React from 'react'

const Heading = ({classStyle,text}) => {
    return (
        <h2 className={`${classStyle} font-semibold text-5xl leading-custom-5xl text-center text-white`}>{text}</h2>
    )
}

export default Heading