import { useState } from "react"
import Header from "./Header"

const Login = () => {
const [isSignInForm, setSignInForm] = useState(true);
const toggleSignInForm =()=>{
    setSignInForm(!isSignInForm);
}

  return (
    <div className="bg-login min-h-screen min-w-full">
        <Header />
        <form className="form-style flex justify-center">
            <div className=" bg-stone-950/[.8] p-12 text-white rounded-md w-1/4">
                <div className="pb-8">
                    <h1 className="text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                </div>
                {!isSignInForm &&
                <div className="pb-4">
                    <input placeholder="Full Name" />
                </div>
                }
                <div className="pb-4">
                    <input placeholder="Email Address" />
                </div>
                <div className="pb-8">
                    <input placeholder="Password" />
                </div>
                <div className="pb-8">
                    <button className="btn-primary">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                </div>
                <div>
                    <span className="text-stone-500">                                         
                        {isSignInForm ? "New to Netflix? ": "Already a Registered?"}
                    </span>
                    &nbsp; 
                    <a href="#" onClick={toggleSignInForm}>                        
                        {isSignInForm ? "Sign up now" :  "Sign In" }
                    </a>
                </div>
            </div> 
        </form>
    </div>
  )
}

export default Login