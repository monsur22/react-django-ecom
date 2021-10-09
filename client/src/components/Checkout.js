import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';

const Checkout = ({match, location, history}) => {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart )
    const {cartItems} = cart
    console.log(cartItems)

    useEffect(() => {
        if (productId) {
        dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
        console.log(qty)

        const removeFromCartHandler = (id) => {
            dispatch(removeFromCart(id))
        }
        const checkoutHandler = (id) => {
            // console.log('checkout')
            history.push('/login?redirect=Shipping')
            // history.push('/Shipping')
        }

    return (

        <>
            <div className="container">
            <div className="check-out">
                <h1>Checkout</h1>
                <table>
                <tbody><tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Prices</th>
                    <th>Delery Detials</th>
                    <th>Romove</th>
                    </tr>
                    {cartItems.map(item =>
                    <tr>
                    <td className="ring-in"><a href="single.html" className="at-in"><img src={item.image} className="img-responsive" alt /></a>
                        <div className="sed">
                        <h5>{item.name}</h5>
                        </div>
                        <div className="clearfix"> </div></td>
                    <td className="check"><input type="text" value={item.qty}  onChange= {(e) => dispatch(addToCart(item.product, Number(e.target.value)))}/></td>
                    <td>${item.price}</td>
                    <td>FREE SHIPPING</td>
                    <td><a onClick={() => removeFromCartHandler(item.product)}><i class="glyphicon glyphicon-trash"></i></a></td>
                    </tr>
                    )
                    }

                </tbody></table>
                <div>
                <h3>
                    Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    :
                    $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
                </h3>
                </div>
                <a href="#" className=" to-buy"onClick={checkoutHandler} disabled={cartItems.length === 0}>PROCEED TO BUY</a>
                <div className="clearfix"> </div>
            </div>
            </div>

        </>
    )
}

export default Checkout
