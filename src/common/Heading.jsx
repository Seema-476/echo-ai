import React from 'react'

const Heading = ({classStyle,text}) => {
    return (
        <h2 className={`${classStyle} font-semibold md:text-5xl text-3xl md:leading-custom-5xl text-center text-white`}>{text}</h2>
    )
}

export default Heading