
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import '../../App.css'
import pay from '../../assets/Payment/pay.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
    const context = useContext(myContext)
    const { toggleMode, mode } = context
    return (
        <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
            <div className="container px-5 py-24 mx-auto" >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5 order-first">
                    <div class="sm:col-span-2">
                        <h1 style={{ color: mode === 'dark' ? 'white' : '' }} class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl ">Subscribe our newsletter to get an update.</h1>

                        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />

                            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-rose-600  focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                        <div class="flex w-1/2 p-4 mt-4 items-center justify-evenly ">
                            <FaFacebook size={30} className='text-gray-600 hover:text-white hover:bg-rose-600 rounded-lg duration-300' />
                            <FaTwitter size={30} className='text-gray-600 hover:text-white hover:bg-rose-600 rounded-lg duration-300' />
                            <FaInstagram size={30} className='text-gray-600 hover:text-white hover:bg-rose-600 rounded-lg duration-300' />
                            <FaLinkedinIn size={30} className='text-gray-600 hover:text-white hover:bg-rose-600 rounded-lg duration-300' />
                        </div>
                    </div>
                    <div className=" w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
                        <nav className="list-none mb-10">
                            <li className='mb-1'>
                                <a className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</a>
                            </li>
                            <li className='mb-1'>
                                <a className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</a>
                            </li>
                            <li className='mb-1'>
                                <a className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</a>
                            </li>
                            <li className='mb-1'>
                                <a className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                            </li>
                        </nav>
                    </div>
                    <div className=" w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link to={'/returnpolicy'} className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                            </li>
                            <li>
                                <Link to={'/about'} className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                            </li>
                            <li>
                                <Link to={'/contact'} className="text-gray-600 text-xl  link link-underline link-underline-black no-underline hover:text-yellow-950" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                            </li>
                        </nav>
                    </div>


                    <div className="w-full px-4">
                        <img src={pay} alt="payment" />
                    </div>
                </div>

            </div>

            <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="container px-5 py-3 mx-auto flex items-center justify-between sm:flex-row flex-col">
                    <Link to={'/'} className='flex'>
                        <div className="flex ">
                            <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>@Copyright</h1>
                        </div>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>© 2023 E-Raindrops—
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.rainDrops.com</a>
                    </p>

                </div>
            </div>
        </footer>
    )
}