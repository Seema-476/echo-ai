import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [scrollTopVisible, setScrollTopVisible] = useState(false);

    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollTopHandler = () => {
        setScrollTopVisible(window.scrollY >= 70);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollTopHandler);
    },);

    return (
        <div>
            {scrollTopVisible && (
                <img onClick={scrollHandler} src="../assets/images/svg/double-arrow.svg" alt="svg" className='fixed right-3 bottom-3 cursor-pointer bg-gradient-to-tr from-blue to-light-blue p-2 rounded border-white border' />
            )}
        </div>
    );
};

export default BackToTop;
