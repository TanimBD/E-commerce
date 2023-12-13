
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value=''
                        onChange=''
                        name='email'
                        className=' bg-gray-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"

                        className=' bg-gray-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button

                        className=' bg-blue-400 duration-300 hover:bg-rose-600 hover:text-white  w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account? <Link className=' text-blue-400 font-bold duration-200 hover:text-rose-600 ' to=''>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login