import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
 

const Home = () => {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Our Vision and mission</h3>
                            <div className="underline mx-auto">Vision</div>
                            <div className="col-md-4 text-center">
                                <h6></h6>
                                <p>
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home