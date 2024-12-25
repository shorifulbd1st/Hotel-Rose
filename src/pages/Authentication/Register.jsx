import Lottie from 'lottie-react'
import React, { useContext, useState } from 'react'
import registerLottieAnimation from '../../assets/Animation - 1733900618816.json'
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
const Register = () => {
    const { handleRegister, user, setUser, updateUserProfile, notify } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const cPassword = form.get('cPassword');

        const hasUppercase = /.*[A-Z].*/;
        const hasLowercase = /.*[a-z].*/;
        const hasValidLength = /.{6,}/;

        if (!hasUppercase.test(password)) {
            setError({ upperCase: 'must have one uppercase letter' });
            return;
        }
        if (!hasLowercase.test(password)) {
            setError({ lowerCase: 'must have one lowercase letter' });
            return;
        }
        if (!hasValidLength.test(password)) {
            setError({ length: 'must be more than 6 character' });
            return;
        }
        if (password != cPassword) {
            setError({ password: "password and confirm password don't match" });
            return;
        }

        handleRegister(email, password)
            .then(result => {
                const newUser = result.user;
                notify('success', `Welcome ${name} your registration successful`);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => navigate('/'))
            })
            .catch(error => notify('error', 'Your account was not created successfully'))

    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left max-w-sm ">
                        <Lottie animationData={registerLottieAnimation}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm p-4 shrink-0 shadow-2xl border border-red-400">

                        <h1 className="text-3xl text-center font-bold">Register now!</h1>

                        <form onSubmit={handleSubmit} className="card-body p-2 pb-0">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

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
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                {
                                    error.upperCase && <label className="label text-xs text-red-600">
                                        {error.upperCase}
                                    </label> ||
                                    error.lowerCase && <label className="label text-xs text-red-600">
                                        {error.lowerCase}
                                    </label> ||
                                    error.length && <label className="label text-xs text-red-600">
                                        {error.length}
                                    </label>
                                }
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='cPassword' type="password" placeholder="Confirm password" className="input input-bordered" required />
                                {
                                    error.password && <label className="label text-xs text-red-600">
                                        {error.password}
                                    </label>
                                }
                            </div>
                            <div className="form-control mt-4">
                                {/* <button className="btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg"> Register</button> */}
                                <button className="w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Register
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

export default Register
