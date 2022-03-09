import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import space from "./assets/space.jpg"


const Login = (props) => {
    const {email, 
        password, 
        setEmail, 
        setPassword, 
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAcount,
        emailError,
        passwordError} = props;

    return(
    <div className="h-screen flex bg-gray-bg1" style={{backgroundImage:`url(${space})`}}> 
        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>Log in to your account 🔐  </h1>
            <section>
                <label>Email</label>
                <input type="text" className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

                <label>password </label>
                <input type="password" className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </section>
            <p>{emailError}</p>
            <p>{passwordError}</p>
            <div className="text-center">
                {hasAccount ? (
                    <>
                         <Button onClick={handleSignup} variant="outlined" color="secondary">
                             Sign Up
                         </Button>
                         <p className="mt-7 mb-2 font-bold"> Are you an ally of the empire ? 🛸</p>
                         <Button onClick={()=> setHasAcount(!hasAccount)} variant="outlined" color="secondary">
                             Sign In
                         </Button>
                    </>
                ): (

             
                    <>
                         <Button onClick={handleLogin} variant="outlined" color="secondary">
                             Sign In
                         </Button>
                         <p className="mt-7 mb-2 text-center font-bold"> Become an ally of the empire 🛸</p>
                         <Button onClick={()=> setHasAcount(!hasAccount)} variant="outlined" color="secondary">
                             Sign Up
                         </Button>
                    </>

                    
                )
                }
            </div>
        </div>
    </div>  
    )
}

export default Login