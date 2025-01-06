import React, { useEffect, useState, useRef } from 'react';
import Icon from '../utils/icons';
import CustomButton from '../common/CustomButton';
import { NAV_ITEMS_LIST } from '../utils/helper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickOutside = (event) => {
    const isClickInsideDropdown = dropdownRefs.current.some(
      (ref) => ref && ref.contains(event.target)
    );
    if (!isClickInsideDropdown) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
      } else {
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="lg:ms-[56px]">
      <div className="max-lg:container max-w-[1920px] mx-auto">
        <div className="flex justify-between items-center h-20 max-sm:h-[88px]">
          <a href="/" className='pt-16'>
            <img
              className="sm:max-w-[59.6px] lg:h-[90px] max-w-[42.38px] h-[64px]"
              src="/assets/images/webp/Venveo-logo.webp"
              alt="nav-logo"
            />
          </a>
          <div
            className={`menuList ${isMenuOpen ? 'max-lg:left-0' : 'max-lg:left-[-100%]'
              } z-10 max-lg:w-full max-lg:fixed max-lg:justify-center max-lg:top-0 max-lg:bg-aqua-green max-lg:flex-col max-lg:transition-all duration-800 flex items-center max-lg:min-h-screen`}
          >
            <div className="lg:flex-row flex flex-col">
              <div className="lg:max-w-[800px] w-full lg:flex-row flex flex-col lg:bg-white lg:pr-[29.5px] lg:ps-[41.79px] lg:h-[80px] items-center max-lg:gap-6 lg:gap-[42px]">
                {NAV_ITEMS_LIST.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    ref={(el) => (dropdownRefs.current[index] = el)}
                  >
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                      className="flex font-medium font-maisonMedium items-center gap-1 text-custom-lg leading-5 hover:text-dark-green transition-all duration-700"
                    >
                      {item.list}
                      <span
                        className={`transition-transform duration-500 mt-[7px] text-center text-custom-sm leading-custom-sm ${activeDropdown === index ? 'rotate-180' : ''
                          }`}
                      >
                        ▼
                      </span>
                    </a>
                    {activeDropdown === index && (
                      <ul className="absolute top-full left-0 bg-white shadow-md p-2 mt-2 rounded z-10">
                        {item.data.map((data, idx) => (
                          <li
                            key={idx}
                            className="py-1 px-1 hover:bg-gray-100 cursor-pointer"
                          >
                            <a href={data.link}>{data.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Icon classStyle={'cursor-pointer'} iconName={'searchIcon'} />
              </div>
              <CustomButton classStyle="text-nowrap max-lg:mt-6" text="Let's Talk" />
            </div>
          </div>
          <div
            onClick={toggleMenu}
            className="menuIcon pt-3 relative max-lg:w-8 max-lg:h-10 z-[15] max-lg:flex max-lg:justify-center gap-3 max-lg:flex-col max-lg:cursor-pointer transition ease-linear duration-300 lg:hidden items-center"
          >
            {isMenuOpen ? (
              <>
                <span className="h-[2px] mt-3 rounded-full absolute top-3 w-full bg-white transform rotate-45 transition duration-300"></span>
                <span className="h-[2px] mt-3 rounded-full absolute top-3 w-full bg-white transform -rotate-45 transition duration-300"></span>
              </>
            ) : (
              <>
                <span className="h-[2px] rounded-full w-full bg-white"></span>
                <span className="h-[1.5px] rounded-full w-full bg-white"></span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;