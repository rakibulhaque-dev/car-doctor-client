import React, { useContext } from 'react';
import googleSignInLogo from '../../../assets/images/google.png';
import { AuthContext } from '../../../providers/AuthProvider';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log('user from Social Login Compo',result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn}>
                    <img className='rounded-md shadow-lg' src={googleSignInLogo} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;