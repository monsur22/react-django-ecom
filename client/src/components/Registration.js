import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="container">
            <div className="register">
                <h1>Register</h1>
                <form>
                <div className="col-md-6  register-top-grid">
                    <div className="mation">
                    <span>First Name</span>
                    <input type="text" />
                    <span>Last Name</span>
                    <input type="text" />
                    <span>Email Address</span>
                    <input type="email" />
                    </div>
                    <div className="clearfix"> </div>
                    <a className="news-letter" href="#">
                    <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i> </i>Sign Up</label>
                    </a>
                </div>
                <div className=" col-md-6 register-bottom-grid">
                    <div className="mation">
                    <span>Password</span>
                    <input type="password" />
                    <span>Confirm Password</span>
                    <input type="password" />
                    </div>
                </div>
                <div className="clearfix"> </div>
                </form>
                <div className="register-but">
                <form>
                    <input type="submit" defaultValue="submit" />
                    <div className="clearfix"> </div>
                </form>
                </div>
            </div>
            </div>

        </>
    )
}

export default Registration
