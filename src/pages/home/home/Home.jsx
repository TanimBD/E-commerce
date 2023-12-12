import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import HeroSection from '../../../components/HeroSection/herosection'
import Filter from '../../../components/filter/filter'

import Testimonial from '../../../components/Testimonial/testimonial'
import myContext from '../../../context/data/myContext'
import ProductCard from '../../../components/productCart/ProductCart'
import Track from '../../../components/track/Track'

function Home() {
    const context = useContext(myContext);

    const { } = context;
    return (
        <Layout>
            <HeroSection />
            <Filter />
            <ProductCard></ProductCard>
            <Track></Track>
            <Testimonial />
        </Layout>
    )
}
export default Home
