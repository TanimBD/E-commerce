import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import t1 from '../../assets/team/team-1.jpg'
import t2 from '../../assets/team/team-2.jpg'
import t3 from '../../assets/team/team-3.jpg'
import '../../App.css'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center mb-10 text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>About Us</h1>

                    <div className="flex flex-wrap justify-evenly items-center -m-4">
                        <div className="lg:w-1/3 h-1/2 member lg:mb-0 mb-6 p-6">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={t1} />
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">John Williamson</h2>
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="text-gray-500">Chief Executive Officer</p>
                            </div>
                            <div class="flex p-4 items-center justify-evenly ">
                                <FaFacebook size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaTwitter size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaInstagram size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaLinkedinIn size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                            </div>
                        </div>

                        <div className="lg:w-1/3 h-1/2 member lg:mb-0 mb-6 p-6">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={t2} />
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">William Anderson</h2>
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="text-gray-500">Product Manager</p>
                            </div>
                            <div class="flex p-4 items-center justify-evenly ">
                                <FaFacebook size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaTwitter size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaInstagram size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaLinkedinIn size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                            </div>
                        </div>
                        <div className="lg:w-1/3 h-1/2 member lg:mb-0 p-6">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={t3} />
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Amanda Jepson</h2>
                                <p style={{ color: mode === 'dark' ? 'text-gray-800': '' }} className="text-gray-500">CTO</p>
                            </div>
                            <div class="flex items-center justify-evenly p-4 ">
                                <FaFacebook size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaTwitter size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaInstagram size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                                <FaLinkedinIn size={30} className='text-blue-600 cursor-pointer hover:text-white hover:bg-blue-600 rounded-lg duration-300' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial