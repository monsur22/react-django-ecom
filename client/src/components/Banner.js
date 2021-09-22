import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="banner">
            <div className="col-sm-3 banner-mat">
                <img className="img-responsive" src="images/ba1.jpg" alt />
            </div>
            <div className="col-sm-6 matter-banner">
                <div className="slider">
                <div className="callbacks_container">
                    <ul className="rslides" id="slider">
                    <li>
                        <img src="images/1.jpg" alt />
                    </li>
                    <li>
                        <img src="images/2.jpg" alt />
                    </li>
                    <li>
                        <img src="images/1.jpg" alt />
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-sm-3 banner-mat">
                <img className="img-responsive" src="images/ba.jpg" alt />
            </div>
            <div className="clearfix"> </div>
            </div>

        </div>
    )
}

export default Banner
