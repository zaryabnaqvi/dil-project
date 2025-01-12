// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { loginWithEmail } from './LoginManager';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import SocialMedia from './SocialMedia';
// import toast from 'react-hot-toast';
// import { signIn } from '../../api/auth';


// const SignInForm = ({handleResponse}) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = async({email, password}) => {
//         const loading = toast.loading('Please wait...');

//         const response = await signIn({userType:"IndustryUser",email, password})
//         if(response.error){
//             toast.dismiss(loading);
//             toast.error(response.error)
//             return;
//         }
//         console.log(response)
//         handleResponse(response.data)
//         toast.dismiss(loading);
    
      
//     }
//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
//             <h2 className="title">Sign in</h2>
//             <div className="input-field">
//                 <span className="fIcon"><FontAwesomeIcon icon={faEnvelope}/></span>
//                 <input  placeholder="Email" {...register("email", { required: true })} />
//             </div>
//             {errors.email && <span className="text-warning">This field is required</span>}
//             <div class="input-field">
//                 <span className="fIcon"><FontAwesomeIcon icon={faLock}/></span>
//                 <input type="password" placeholder="Password" {...register("password", { required: true })} />
//             </div>
//             {errors.password && <span className="text-warning">This field is required</span>}
//             <input className="iBtn" type="submit" value="sign In"/>
//             <p className="social-text">Or Sign in with social platforms</p>
//             <SocialMedia handleResponse={handleResponse}/>
//         </form>
//     );
// };

// export default SignInForm;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { signIn } from '../../api/auth';

const SignInForm = ({ handleResponse }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async ({ email, password }) => {
        const loading = toast.loading('Authenticating...');
        try {
            const response = await signIn({ userType: "IndustryUser", email, password });
            toast.dismiss(loading);
            handleResponse(response.data);
            toast.success('Sign in successful!');
        } catch (error) {
            toast.dismiss(loading);
            toast.error(error.message || 'Something went wrong. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
            <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
                <input
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                />
            </div>
            {errors.email && <span className="text-warning">{errors.email.message}</span>}
            <div className="input-field">
                <span className="fIcon"><FontAwesomeIcon icon={faLock} /></span>
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: "Password is required" })}
                />
            </div>
            {errors.password && <span className="text-warning">{errors.password.message}</span>}
            <input className="iBtn" type="submit" value="Sign In" />
            <p className="social-text">Or Sign in with social platforms</p>
            <SocialMedia handleResponse={handleResponse} />
        </form>
    );
};

export default SignInForm;
