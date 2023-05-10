import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const user = { name, email, password, confirm }
        console.log(user)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error=>console.log(error))
    }
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col hero-content lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />

                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign In</h1>
                        {/* form here  */}
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                    <input type="password" placeholder="confirm password" name='confirm' className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input type='submit' value="Sign Up" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='font-bold text-orange-600' to='/login'>Login Here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;