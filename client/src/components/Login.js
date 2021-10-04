import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions/userAction';

const Login = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
        // console.log('form submitted');

    }

    return (
        <>
            <div className="account">
            <div className="container">
                <h1>Account</h1>
                <div className="account_grid">
                <div className="col-md-6 login-right">
                    <form onSubmit={submitHandler}>
                    <span>Email Address</span>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span>Password</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    <div className="word-in">
                        <a className="forgot" href="#">Forgot Your Password?</a>
                        <input type="submit" defaultValue="Login" />
                    </div>
                    </form>
                </div>
                <div className="col-md-6 login-left">
                    <h4>NEW CUSTOMERS</h4>
                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <a className="acount-btn" href="/Registration">Create an Account</a>
                </div>
                <div className="clearfix"> </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Login
