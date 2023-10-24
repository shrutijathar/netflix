import { useRef, useState } from "react"
import Header from "./Header"
import {checkValidation} from "../utils/validation"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
const [isSignInForm, setSignInForm] = useState(true);
const [errmsg, setErrmsg] = useState(null);
const navigate = useNavigate();
const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const toggleSignInForm =()=>{
    setSignInForm(!isSignInForm);
}

const loginBtnClick = () => {
    const msg = checkValidation(email.current.value, password.current.value);
    setErrmsg(msg);
    if(msg) return;
   //else msg is null 
   if(!isSignInForm){
    // SignUp Logic logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://qph.cf2.quoracdn.net/main-thumb-1005605142-200-fckjvhyttxremgblviezlgokilqybrmr.jpeg"
                }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    navigate("/browse")
                }).catch((error) => {
                    // An error occurred
                    setErrmsg(error.message)
                });
            console.log(user);
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrmsg(errorMessage);
            // ..
        });
   }
   else{
    //Sigin in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/browse");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;            
            setErrmsg(errorMessage);
        });
   }
}

  return (
    <div className="bg-login min-h-screen min-w-full">
        <Header />
        <form onSubmit={(e)=>e.preventDefault()} className="form-style flex justify-center">
            <div className=" bg-stone-950/[.8] p-12 text-white rounded-md w-1/4">
                <div className="pb-8">
                    <h1 className="text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                </div>
                {!isSignInForm &&
                <div className="pb-4">
                    <input placeholder="Full name" 
                    ref={name}
                    />
                </div>
                }
                <div className="pb-4">
                    <input placeholder="Email address"
                    ref={email}
                    />
                </div>
                <div className="pb-4">
                    <input placeholder="Password"
                    ref={password}
                    />
                </div>
                <div className="pb-8">
                    <p className=" text-red-500">{errmsg}</p>
                </div>
                <div className="pb-8">
                    <button className="btn-primary"
                    onClick={loginBtnClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                </div>
                <div>
                    <span className="text-stone-500">                                         
                        {isSignInForm ? "New to Netflix? ": "Already registered?"}
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