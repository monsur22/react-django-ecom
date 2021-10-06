import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserDetails, updateUserProfile } from '../actions/userAction';
import { listMyOrder } from '../actions/orderAction';


const Profile = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    // const orderListMy = useSelector((state) => state.orderListMy)
    // const { loading:loadingOrders, error:errorOrders, orders } = orderListMy

    useEffect(() => {
        if (!userInfo) {
          history.push('/login')
        } else {
          if (!user.name) {
            dispatch(getUserDetails('profile'))
            dispatch(listMyOrder())

          } else {
            setName(user.name)
            setEmail(user.email)
          }
        }
      }, [dispatch, history, userInfo, user])

    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage('Password do not match')
        }else{
            dispatch(updateUserProfile({id: user._id, name, email, password}))
            // dispath update profile
        }

    }

    return (
        <>
            <div className="container">
            <div className="register">
                <h1>Profile</h1>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {message && <div>{message}</div>}
                <form onSubmit={submitHandler}>
                <div className="col-md-4  register-top-grid">
                    <div className="mation">
                    <span>Name</span>
                    <input type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)}/>
                    <span>Email Address</span>
                    <input type="email" value={email} name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="clearfix"> </div>
                    {/* <a className="news-letter" href="#">
                    <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i> </i>Sign Up</label>
                    </a> */}
                    <div className=" register-bottom-grid">
                    <span>Password</span>
                    <input type="password" value={password} id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span>Confirm Password</span>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                <input type="submit" defaultValue="submit" />

                </div>

                </form>
                <div className=" col-md-8 register-bottom-grid">

                </div>

                <div className="clearfix"> </div>
            </div>
            </div>

        </>
    )
}

export default Profile
