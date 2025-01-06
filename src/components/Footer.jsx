import React from 'react'
import { FOOTER_DATA } from '../utils/helper'
import { socialLinks } from '../utils/helper'

const Footer = () => {
    return (
        <div className='bg-z-black'>
            <div className='container'>
                <div className='flex flex-row -mx-3 flex-wrap'>
                    <div className='w-[33.33%] px-3'>
                        <img src="/assets/images/png/footer-logo.png" alt="footer-logo" className='w-[150px] h-[190px]' />
                    </div>
                    {FOOTER_DATA.map((obj, index) => (
                        <div
                            key={index}
                            className={`w-[33.33%] px-3 ${index === 3 ? '' : ''}`}>
                            <ul>
                                <li className="text-white">
                                    {obj.title}
                                </li>
                                {obj.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="text-white">
                                        <a
                                            className=""
                                            href={link.href}
                                        >
                                            {link.text}
                                        </a>
                                        {socialLinks.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                className="transition duration-700 hover:scale-125"
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                {/* <Icon iconName={link.name} /> */}
                                            </a>
                                        ))}
                                    </li>
                                ))}
                            </ul>
                     
                        </div>
                    ))}
                    {/* <ul>
                          <li className='font-normal text-base leading-custom-xl text-white pb-[14px]'>Quick Links</li>
                          <li className='pb-[14px]'><a href="" className='font-normal text-base leading-custom-xl text-white opacity-70'>About us</a></li>
                          <li className='pb-[14px]'><a href="" className='font-normal text-base leading-custom-xl text-white opacity-70'>About us</a></li>
                          <li className='pb-[14px]'><a href="" className='font-normal text-base leading-custom-xl text-white opacity-70'>About us</a></li>
                          <li className='pb-[14px]'><a href="" className='font-normal text-base leading-custom-xl text-white opacity-70'>About us</a></li>
                          <li className='pb-[14px]'><a href="" className='font-normal text-base leading-custom-xl text-white opacity-70'>About us</a></li>
                      </ul> */}
                </div>
                {/* <div className='w-[33.33%] px-3 flex flex-col items-end'>
                      <div>
                          <ul>
                              <li className='font-normal text-base leading-custom-xl text-white pb-3'>Send Us An E-mail</li>
                              <li className='pb-6'><a href="" className='font-normal text-base text-white opacity-70'>info@echoai.ai</a></li>
                          </ul>

                          <p className='font-normal text-base leading-custom-xl text-white pb-[14px]'>Follow Us On</p>
                          <div className='flex gap-3'>
                              <a href="" className='w-10 h-10 flex items-center justify-center bg-blue-400 rounded-[100px]'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.39046 4.1675C6.39024 4.60953 6.21443 5.03336 5.90172 5.34577C5.589 5.65817 5.16499 5.83355 4.72296 5.83333C4.28094 5.83311 3.8571 5.65731 3.5447 5.34459C3.23229 5.03187 3.05691 4.60786 3.05713 4.16583C3.05735 3.72381 3.23316 3.29997 3.54587 2.98757C3.85859 2.67516 4.2826 2.49978 4.72463 2.5C5.16666 2.50022 5.59049 2.67603 5.9029 2.98874C6.2153 3.30146 6.39068 3.72547 6.39046 4.1675ZM6.44046 7.0675H3.10713V17.5008H6.44046V7.0675ZM11.7071 7.0675H8.39046V17.5008H11.6738V12.0258C11.6738 8.97583 15.6488 8.6925 15.6488 12.0258V17.5008H18.9405V10.8925C18.9405 5.75083 13.0571 5.9425 11.6738 8.4675L11.7071 7.0675Z" fill="white" />
                              </svg></a>
                              <a href="" className='w-10 h-10 flex items-center justify-center bg-blue-400 rounded-[100px]'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.39046 4.1675C6.39024 4.60953 6.21443 5.03336 5.90172 5.34577C5.589 5.65817 5.16499 5.83355 4.72296 5.83333C4.28094 5.83311 3.8571 5.65731 3.5447 5.34459C3.23229 5.03187 3.05691 4.60786 3.05713 4.16583C3.05735 3.72381 3.23316 3.29997 3.54587 2.98757C3.85859 2.67516 4.2826 2.49978 4.72463 2.5C5.16666 2.50022 5.59049 2.67603 5.9029 2.98874C6.2153 3.30146 6.39068 3.72547 6.39046 4.1675ZM6.44046 7.0675H3.10713V17.5008H6.44046V7.0675ZM11.7071 7.0675H8.39046V17.5008H11.6738V12.0258C11.6738 8.97583 15.6488 8.6925 15.6488 12.0258V17.5008H18.9405V10.8925C18.9405 5.75083 13.0571 5.9425 11.6738 8.4675L11.7071 7.0675Z" fill="white" />
                              </svg></a>
                              <a href="" className='w-10 h-10 flex items-center justify-center bg-blue-400 rounded-[100px]'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.39046 4.1675C6.39024 4.60953 6.21443 5.03336 5.90172 5.34577C5.589 5.65817 5.16499 5.83355 4.72296 5.83333C4.28094 5.83311 3.8571 5.65731 3.5447 5.34459C3.23229 5.03187 3.05691 4.60786 3.05713 4.16583C3.05735 3.72381 3.23316 3.29997 3.54587 2.98757C3.85859 2.67516 4.2826 2.49978 4.72463 2.5C5.16666 2.50022 5.59049 2.67603 5.9029 2.98874C6.2153 3.30146 6.39068 3.72547 6.39046 4.1675ZM6.44046 7.0675H3.10713V17.5008H6.44046V7.0675ZM11.7071 7.0675H8.39046V17.5008H11.6738V12.0258C11.6738 8.97583 15.6488 8.6925 15.6488 12.0258V17.5008H18.9405V10.8925C18.9405 5.75083 13.0571 5.9425 11.6738 8.4675L11.7071 7.0675Z" fill="white" />
                              </svg></a>
                    </div>
                          </div>
                      
                  </div> */}
            </div>
        </div>
        // </div>
    )
}

export default Footer