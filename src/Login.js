import React from "react";
import {Button} from "@material-ui/core";
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
    const[{}, dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
           .catch(error=>alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://source.unsplash.com/1600x900/?nature,water" alt="logo"/>
                <div className="login_text">
                    <h1>Sign in to Whatsupp</h1>
                </div>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
