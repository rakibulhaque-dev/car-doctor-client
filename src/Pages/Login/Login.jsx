import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        {/* form here  */}
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                </label>
                                <label className="label">
                                    <Link href="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input type='submit' value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Car Doctors ? <Link className='font-bold text-orange-600' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;