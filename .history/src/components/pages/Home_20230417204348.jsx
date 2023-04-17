import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
import VMC from '../inc/VMC'


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
            <VMC />

            {/* Our Services */}

            <section className="section bg-light border-top">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Services</h3>
                <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
                <div className="col-md-4">
                    <div className="card shadow">
                        <img src="https://th.bing.com/th/id/OIP.aiFv6lhTivXyASP6C2LWjQHaB2?w=305&h=87&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" className="" />
                        <div className="card-body">
                            <h6>Services 1</h6>
                            <div className="underline"></div>
                            <p>lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                
            </div>

        </div>
    </div>
</section>

        </div>
    )
}

export default Home