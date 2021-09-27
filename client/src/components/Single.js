import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails, createProductReview } from '../actions/productAction';


const Single = ({history,match}) => {
    const [qty , setQty] = useState(1)
    const [rating , setRating] = useState(0)
    const [comment , setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() =>{

        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () =>{
        history.push(`/Checkout/${match.params.id}?qty=${qty}`)
    }
    return (
        <>
            <div className="single">
            <div className="container">
                <div className="col-md-9">
                <div className="col-md-5 grid">
                    <div className="flexslider">
                    <ul className="slides">
                        <li data-thumb="images/si.jpg">
                        <div className="thumb-image"> <img src={product.image} data-imagezoom="true" className="img-responsive" /> </div>
                        </li>

                    </ul>
                    </div>
                </div>
                <div className="col-md-7 single-top-in">
                    <div className="single-para simpleCart_shelfItem">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <div className="star-on">
                        <ul>
                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                        </ul>
                        <div className="review">
                        <a href="#"> {product.numReviews} reviews </a>/
                        <a href="#">  Write a review</a>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <label className="add-to item_price">${product.price}</label>
                    <ul>
                    {product.countInStock > 0 && (
                        <div className="row">
                          <div>Qty</div>
                            <div>
                                <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                    {[...Array(product.countInStock).keys()].map(x =>
                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>
                            </div>
                        </div>


                    )}
                    </ul>
                    <a  className="cart item_add"onClick={addToCartHandler}disabled={product.countInStock === 0}>Add To Cart</a>

                    </div>
                </div>

                </div>
                {/*-*/}
                <div className="col-md-3 product-bottom">
                {/*categories*/}
                <div className=" rsidebar span_1_of_left">
                    <h3 className="cate">Categories</h3>
                    <ul className="menu-drop">
                    <li className="item1"><a href="#">Men </a>
                        <ul className="cute">
                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                        </ul>
                    </li>
                    <li className="item2"><a href="#">Women </a>
                        <ul className="cute">
                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                        </ul>
                    </li>
                    <li className="item3"><a href="#">Kids</a>
                        <ul className="cute">
                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                        <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                        </ul>
                    </li>
                    <li className="item4"><a href="#">Accesories</a>
                        <ul className="cute">
                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                        <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                        </ul>
                    </li>
                    <li className="item4"><a href="#">Shoes</a>
                        <ul className="cute">
                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                {/*initiate accordion*/}
                {/*//menu*/}
                {/*seller*/}
                <div className="product-bottom">
                    <h3 className="cate">Best Sellers</h3>
                    <div className="product-go">
                    <div className=" fashion-grid">
                        <a href="single.html"><img className="img-responsive " src="images/pr.jpg" alt /></a>
                    </div>
                    <div className=" fashion-grid1">
                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                        <span className=" price-in1"> $40.00</span>
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="product-go">
                    <div className=" fashion-grid">
                        <a href="single.html"><img className="img-responsive " src="images/pr1.jpg" alt /></a>
                    </div>
                    <div className=" fashion-grid1">
                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                        <span className=" price-in1"> $40.00</span>
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="product-go">
                    <div className=" fashion-grid">
                        <a href="single.html"><img className="img-responsive " src="images/pr2.jpg" alt /></a>
                    </div>
                    <div className=" fashion-grid1">
                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                        <span className=" price-in1"> $40.00</span>
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                    <div className="product-go">
                    <div className=" fashion-grid">
                        <a href="single.html"><img className="img-responsive " src="images/pr3.jpg" alt /></a>
                    </div>
                    <div className=" fashion-grid1">
                        <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                        <span className=" price-in1"> $40.00</span>
                    </div>
                    <div className="clearfix"> </div>
                    </div>
                </div>
                {/*//seller*/}
                {/*tag*/}
                <div className="tag">
                    <h3 className="cate">Tags</h3>
                    <div className="tags">
                    <ul>
                        <li><a href="#">design</a></li>
                        <li><a href="#">fashion</a></li>
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">dress</a></li>
                        <li><a href="#">fashion</a></li>
                        <li><a href="#">dress</a></li>
                        <li><a href="#">design</a></li>
                        <li><a href="#">dress</a></li>
                        <li><a href="#">design</a></li>
                        <li><a href="#">fashion</a></li>
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">dress</a></li>
                        <div className="clearfix"> </div>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="clearfix"> </div>
            </div>
            </div>

        </>
    )
}

export default Single
