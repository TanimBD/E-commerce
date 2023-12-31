import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { IoIosStar, IoMdStarHalf } from "react-icons/io";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa6";
import { WiRaindrop } from "react-icons/wi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';



function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductData()

    }, [])

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    {
                        products && <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={products.imageUrl}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <div className='flex items-center'>
                                    <WiRaindrop size={35} className='text-blue-500' />
                                    <h2 className="text-xl title-font text-gray-900 tracking-widest">
                                        RainDrops
                                    </h2>
                                    <WiRaindrop size={35} className='text-blue-500' />
                                </div>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {products.title}
                                </h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <IoIosStar className='text-indigo-500 text-xl' />
                                        <IoIosStar className='text-indigo-500 text-xl' />
                                        <IoIosStar className='text-indigo-500 text-xl' />
                                        <IoIosStar className='text-indigo-500 text-xl' />
                                        <IoMdStarHalf className='text-indigo-500 text-xl' />

                                        <span className="text-gray-900 font-medium ml-3">4.5* Reviews</span>
                                    </span>
                                    <span className="flex gap-2 text-xl ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <a className="text-indigo-500 hover:text-rose-600 cursor-pointer">
                                            <FaFacebook />
                                        </a>
                                        <a className="text-indigo-500 cursor-pointer hover:text-rose-600">
                                            <AiFillTwitterCircle />
                                        </a>
                                        <FaFacebookMessenger className='cursor-pointer text-indigo-500 hover:text-rose-600' />

                                    </span>
                                </div>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {products.description}
                                </p>

                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ${products.price}
                                    </span>
                                    <button onClick={() => addCart(products)} className="flex ml-auto text-white bg-indigo-500 bg-border-0 py-2 px-6 focus:outline-none duration-300  hover:bg-rose-600  rounded">
                                        Add To Cart
                                    </button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 hover:bg-rose-600 hover:text-white duration-300  border-0 inline-flex items-center justify-center text-indigo-500 ml-4">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>

        </Layout >
    )
}

export default ProductInfo