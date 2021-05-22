import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
function Login() {
    const [state, dispatch] = useStateValue()
    const singIn = () =>{
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"/>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"/> 
            </div>
            <Button type="submit" onClick={singIn} color='primary' variant='contained'>
                Sign In
            </Button>
        </div>
    )
}

export default Login
