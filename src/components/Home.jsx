import React from 'react'
import '../style/Home.scss'
import vg from '../asset/home-office-569153_1280.jpg'
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='Home' id='Home'>
                <main>
                    <h1>TechWeb</h1>
                    <p>MAKE YOUR OWN PROJECT</p>
                </main>  
            </div>

            <div className="home2" id='Contact'>
                <img src={vg} alt="" />
                <div>
                    <p>
                        Highly organized, self-motivated individual with excellent time-management and leadership skills. Proven ability in developing front-end applications using HTML, CSS, and JavaScript, Reactjs.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Highly organized, self-motivated individual with excellent time-management and leadership skills. </p>
                </div>
            </div>

            <div className="Home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{ animationDelay: "0.3s" }}>
                            <a href="https://www.google.com" target={"blank"}>
                                <AiFillGoogleCircle />
                                <p id='left'>Google</p>
                            </a>
                        </div>

                        <div
                            style={{ animationDelay: "0.5s" }}>
                            <a href="https://www.amazon.com" target={"blank"}>
                                <AiFillAmazonCircle />
                                <p id='left'>Amazon</p>
                            </a>
                        </div>

                        <div
                            style={{ animationDelay: "0.7s" }}>
                            <a href="https://www.youtube.com" target={"blank"}>
                                <AiFillYoutube />
                                <p id='left'>Youtube</p>
                            </a>
                        </div>

                        <div
                            style={{ animationDelay: "1s" }}>
                            <a href="https://www.instagram.com" target={"blank"}>
                                <AiFillInstagram />
                                <p id='left'>Instagram</p>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home