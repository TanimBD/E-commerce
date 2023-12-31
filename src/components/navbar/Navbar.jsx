import React, { Fragment, useContext, useState } from 'react'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Dialog, Transition } from '@headlessui/react'
import myContext from '../../context/data/myContext'
import { RxCross2 } from 'react-icons/rx'
import { Link, Navigate } from 'react-router-dom';
import flag from '../../assets/Icon/bd_flag.png'
import userPic from '../../assets/Icon/user.png'
import { WiRaindrop } from "react-icons/wi";
import "../../App.css"
import { useSelector } from 'react-redux';

function Navbar() {
    const context = useContext(myContext);
    const { mode, toggleMode } = context;

    const [open, setOpen] = useState(false);


    const user = JSON.parse(localStorage.getItem('user'))
    // console.log(user.user.email)
    const logout = () => {
        localStorage.clear('user');
        window.location.href = "/login";
    }

    const cardItems = useSelector((state) => state.cart)


    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <div className="flex px-4 pb-2 pt-28">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >

                                        <span className='font-medium text-gray-900'>Menu</span>
                                        <RxCross2 size={30} />
                                    </button>
                                </div>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <div className="flow-root ">
                                        <Link to={'/'} className=" -m-2 duration-200 hover:bg-rose-600 block p-2 hover:text-white rounded font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Home
                                        </Link>
                                    </div>

                                    <div className="flow-root ">
                                        <Link to={'/contactus'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 duration-200 hover:bg-rose-600 hover:text-white rounded  block p-2 font-medium text-gray-900">
                                            Contact Us
                                        </Link>
                                    </div>


                                    {user?.user?.email === 'sabbir123@gmail.com' ?
                                        <div className="flow-root">

                                            <Link to={'/dashboard'} className="-m-2 duration-200 hover:bg-rose-600 hover:text-white rounded block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                                admin
                                            </Link>
                                        </div> : ''
                                    }

                                    {user ? <div className="flow-root">
                                        <a onClick={logout} className="-m-2 block p-2 duration-200 hover:bg-rose-600 hover:text-white rounded font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Logout
                                        </a>
                                    </div> : ''}
                                    {user ? '' : <div className="flow-root">
                                        <a onClick={logout} className="-m-2 block p-2 duration-200 hover:bg-rose-600 hover:text-white rounded font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Login
                                        </a>
                                    </div>}
                                    {user ? <div className="flow-root">
                                        <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                                            <img
                                                className="inline-block w-10 h-10 rounded-full"
                                                src={userPic} />
                                        </Link>
                                    </div> : ''
                                    }
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="img/indiaflag.png"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 flex items-center text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}><img className="block h-auto w-12 px-2 flex-shrink-0" src={flag}></img>BD</span>

                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-blue-500 px-4 text-md font-medium text-white sm:px-6 lg:px-7 lg:py-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
                    Get free delivery on orders over 400/-
                </p>

                <nav aria-label="Top" className="bg-gray-100 lg:py-4 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                    <div className="">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link to={'/'} className='flex'>
                                    <div className="flex items-center">
                                        <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Raindrops</h1><WiRaindrop size={35} className='text-blue-500' />
                                    </div>
                                </Link>
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end ">

                                    <Link to={'/'} className="text-md  duration-200 hover:bg-rose-600  py-8 px-6 rounded hover:text-white font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Home
                                    </Link>

                                    <Link to={'/contactUs'} className="text-md hover:bg-rose-600  p-8 rounded hover:text-white font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Contact Us
                                    </Link>

                                    {user?.user?.email === 'sabbir123@gmail.com' ?
                                        <Link to={'/dashboard'} className="text-md hover:bg-rose-600 rounded p-8  hover:text-white font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                            Admin
                                        </Link> : ''}

                                    {user ? <a onClick={logout} className="text-md hover:bg-rose-600  p-8 rounded hover:text-white font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Logout
                                    </a> : ''}
                                    {user ? '' : <a onClick={logout} className="text-md hover:bg-rose-600  p-8 rounded hover:text-white font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        Login
                                    </a>
                                    }
                                </div>

                                <div className="hidden lg:ml-8 lg:flex">
                                    <a href="#" className="flex items-center text-gray-700 ">
                                        <img
                                            src={flag}
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-md  font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>BD</span>
                                    </a>
                                </div>
                                {user || user?.user?.email === 'sabbir123@gmail.com' ? <div className="hidden lg:ml-8 lg:flex">
                                    < a href="#" className="flex items-center text-gray-700 ">
                                        <img
                                            className="inline-block w-10 h-10 rounded-full"
                                            src={userPic}
                                            alt="Dan_Abromov" />
                                    </a>
                                </div> : ''}

                                {/* Search */}
                                <div className="flex lg:ml-6">
                                    <button className='' onClick={toggleMode}>
                                        {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                                        {mode === 'light' ?
                                            (<FiSun className='duration-300 hover:text-rose-600' size={30} />
                                            ) : 'dark' ?
                                                (<BsFillCloudSunFill className='duration-300 hover:text-rose-600' size={30} />
                                                ) : ''}
                                    </button>
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 duration-300 hover:text-rose-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>

                                        <span className="ml-2 text-sm font-medium text-gray-800 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cardItems.length}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav >
            </header >
        </div >
    )
}

export default Navbar
