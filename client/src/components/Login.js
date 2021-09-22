import React from 'react'

const Login = () => {
    return (
        <>
            <div className="account">
            <div className="container">
                <h1>Account</h1>
                <div className="account_grid">
                <div className="col-md-6 login-right">
                    <form>
                    <span>Email Address</span>
                    <input type="text" />
                    <span>Password</span>
                    <input type="text" />
                    <div className="word-in">
                        <a className="forgot" href="#">Forgot Your Password?</a>
                        <input type="submit" defaultValue="Login" />
                    </div>
                    </form>
                </div>
                <div className="col-md-6 login-left">
                    <h4>NEW CUSTOMERS</h4>
                    <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                    <a className="acount-btn" href="register.html">Create an Account</a>
                </div>
                <div className="clearfix"> </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Login
