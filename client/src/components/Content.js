import React,{useState, useEffect} from 'react'
import axios from 'axios';
const Content = () => {
    const [products, setProducts]=useState([])

    useEffect(() =>{

        async function fetchProducts(){
            const {data} = await axios.get('/api/products/')
            setProducts(data)

        }
        fetchProducts()

    },[])
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="content-top">
                        <h1>Recent Products</h1>
                        <div className="content-top1">
                        {products.map((product) => (
                            <div className="col-md-3 col-md2">
                                <div  style={{margin:'0px 0px 20px 0px'}}className="col-md1 simpleCart_shelfItem">
                                    <a href={`/Single/${product._id}`}>
                                    <img className="img-responsive" src={product.image} alt />
                                    </a>
                                    <h3><a href={`/Single/${product._id}`}>{product.name}</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">${product.price}</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                            <div className="clearfix"> </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content
