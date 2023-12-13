import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import HeroSection from '../../../components/HeroSection/herosection'
import Filter from '../../../components/filter/filter'

import Testimonial from '../../../components/Testimonial/testimonial'
import myContext from '../../../context/data/myContext'
import ProductCard from '../../../components/productCart/ProductCart'
import Track from '../../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../../redux/cartSlice'

function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart)
    console.log(cartItem)

    const addCart = () => {
        dispatch(addToCart("shirt"));
    }

    const deleteCart = () => {
        dispatch(deleteFromCart("shirt"));
    }
    return (
        <Layout>
            <div className="flex gap-5">
                <button className='bg-gray-600' onClick={() => addCart()} type="button">add</button>
                <button className='bg-gray-600' onClick={() => deleteCart()}> del</button>
            </div>
            <HeroSection />
            <Filter />
            <ProductCard></ProductCard>
            <Track></Track>
            <Testimonial />
        </Layout>
    )
}
export default Home
