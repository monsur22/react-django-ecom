import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveShippingAddress } from '../actions/cartAction';
import CheckoutStep from '../components/CheckoutStep';


const Shipping = ({ history}) => {
  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }



    return (
        <>
            <div className="container">
            <CheckoutStep step1 step2 ></CheckoutStep>
            <div className="register">
                <h1>Shipping</h1>
                {/* {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {message && <div>{message}</div>} */}
                <form onSubmit={submitHandler}>
                <div className="col-md-4  register-top-grid">
                    <div className="mation">
                    <span>Address</span>
                    <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}/>
                    <span>City</span>
                    <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}/>
                    <span>Post Code</span>
                    <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}/>
                    <span>Country</span>
                    <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div className="clearfix"> </div>
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

export default Shipping
