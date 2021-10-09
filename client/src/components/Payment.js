import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartAction';
import CheckoutStep from '../components/CheckoutStep';

const Payment = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/Shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

    return (
        <div>
          <CheckoutStep step1 step2 step3></CheckoutStep>
          <div className="register">
                <h1>Payment</h1>

                <form onSubmit={submitHandler}>
                <div className="col-md-12 container register-top-grid">
                    <div className="mation">
                    <span>Paypal</span>

                    <input type="radio"
                      name="paymentMethod"
                      id="paymentMethod"
                      value="paypal"
                      onChange={(e) => setPaymentMethod(e.target.value)}/>

                    <div className="clearfix"> </div>
                <input type="submit" defaultValue="submit" />

                </div>
                </div>
                </form>
                <div className=" col-md-8 register-bottom-grid">

                </div>

                <div className="clearfix"> </div>
            </div>
        </div>
    )
}

export default Payment
