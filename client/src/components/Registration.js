import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register } from '../actions/userAction';


const Registration = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()
    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        }else{
            dispatch(register(name, email, password))

        }
        console.log('register')

    }

    return (
        <>
            <div className="container">
            <div className="register">
                <h1>Register</h1>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {message && <div>{message}</div>}
                <form onSubmit={submitHandler}>
                <div className="col-md-6  register-top-grid">
                    <div className="mation">
                    <span>Name</span>
                    <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                    <span>Email Address</span>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="clearfix"> </div>
                    {/* <a className="news-letter" href="#">
                    <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i> </i>Sign Up</label>
                    </a> */}
                </div>
                <div className=" col-md-6 register-bottom-grid">
                    <div className="mation">
                    <span>Password</span>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span>Confirm Password</span>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>

                <div className="clearfix"> </div>
                <input type="submit" defaultValue="submit" />
                </form>
                <div className="register-but">
                {/* <form>
                    <input type="submit" defaultValue="submit" />
                    <div className="clearfix"> </div>
                </form> */}
                </div>
            </div>
            </div>

        </>
    )
}

export default Registration
