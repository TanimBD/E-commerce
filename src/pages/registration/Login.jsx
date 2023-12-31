
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { app, auth } from '../../firebase/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Loader from '../../components/loader/Loader';
import { FaSquareGooglePlus } from "react-icons/fa6";
import { GoogleAuthProvider } from "firebase/auth";

function Login() {

    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result));
                toast.success('Signin Successful')
                navigate('/')
            }).catch((error) => {
                toast.error('Invalid Login!!')

                const errorMessage = error.message;
                console.log(errorMessage)
                const email = error.customData.email;
            });
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const context = useContext(myContext)
    const { loading, setLoading } = context

    const navigate = useNavigate()

    const login = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('user', JSON.stringify(result));
            toast.success('Signin Successful')
            navigate('/');
            setLoading(false);
        } catch (error) {
            toast.error('Invalid Email or Password!!')
            setLoading(false);
        }
    }
    return (
        <div className=' flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-2xl mb-4 font-bold'>Login</h1>
                </div>

                <div onClick={handleSignIn} className='flex items-center justify-center'>
                    <button class="flex hover:bg-rose-600 font-bold items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-blue-400 border border-slate-600 rounded-md  hover:text-white duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
                        <FaSquareGooglePlus size={30} className='text-white mx-3 hover:text-white' />
                        Continue with Google
                    </button>
                </div>


                <hr class="mt-6 border-b-1 border-blueGray-300" />
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold mt-2'>Welcome!</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 focus:border-sky-500 focus:ring-sky-500 focus:ring-2 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div class="w-3/4 mb-3 flex flex-row justify-between">
                    <div class=" flex items-center gap-x-1">
                        <input type="checkbox" name="remember" id="" class=" w-4 h-4 " />
                        <label for="" class="text-sm text-white">Remember me</label>
                    </div>
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={login}
                        className=' bg-blue-400 duration-300 hover:bg-rose-600 hover:text-white  w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account? <Link className=' text-blue-400 font-bold duration-200 hover:text-rose-600 ' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login