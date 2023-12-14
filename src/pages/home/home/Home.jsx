import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import HeroSection from '../../../components/HeroSection/herosection'
import Testimonial from '../../../components/Testimonial/testimonial'
import myContext from '../../../context/data/myContext'
import ProductCard from '../../../components/productCart/ProductCart'
import Track from '../../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../../redux/cartSlice'
import Client from '../../clients/Client'

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

            <HeroSection />
            <ProductCard></ProductCard>
            <Track></Track>
            <Client></Client>
            <Testimonial />
        </Layout>
    )
}
export default Home
