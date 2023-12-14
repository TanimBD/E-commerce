import React from 'react'
import cl1 from '../../assets/clients/client-1.png'
import cl2 from '../../assets/clients/client-2.png'
import cl3 from '../../assets/clients/client-3.png'
import cl4 from '../../assets/clients/client-4.png'
import cl5 from '../../assets/clients/client-5.png'
import cl6 from '../../assets/clients/client-6.png'

function Client() {
    return (
        <div className='flex items-center justify-between my-5'>
            <div className='w-1/6 px-8'>
                <img src={cl1} alt="" srcset="" />
            </div>
            <div className='w-1/6 px-8'>
                <img src={cl2} alt="" srcset="" />
            </div>
            <div className='w-1/6 px-8'>
                <img src={cl3} alt="" srcset="" />
            </div>
            <div className='w-1/6 px-8'>
                <img src={cl4} alt="" srcset="" />
            </div>
            <div className='w-1/6 px-8'>
                <img src={cl5} alt="" srcset="" />
            </div>
            <div className='w-1/6 px-8'>
                <img src={cl6} alt="" srcset="" />
            </div>

        </div>
    )
}

export default Client
