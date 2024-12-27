import React, { useContext } from 'react'
import Lottie from 'lottie-react';
import signInAnimation from '../../assets/SignIn.json'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
const SignIn = () => {
    const { handleLogin, notify } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state || '/';
    // console.log(from)
    const from = location.state?.from || '/';
    // console.log(from)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleLogin(email, password)
            .then(res => {
                console.log(res.user)
                const user = { email: email };
                // axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         if (res.data) {
                //             navigate(from)
                //         }
                //     })
                notify('success', 'login successful')
                navigate(from)

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-sm ">
                        <Lottie animationData={signInAnimation}></Lottie>
                    </div>
                    <div className=" card bg-base-100 w-full max-w-sm p-4  shrink-0 shadow-2xl border border-red-400">

                        <h1 className="text-3xl text-center font-bold ">SignIn now!</h1>
                        <form onSubmit={handleSubmit} className="p-0 card-body px-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Login
                                </button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
