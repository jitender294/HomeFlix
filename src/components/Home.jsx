import React from 'react'
import '../style/Home.scss'
import vg from '../asset/2.webp'
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
                    <h1>TechStar</h1>
                    <p>Solutioin to all your problem</p>
                </main>
            </div>

            <div className="home2" id='Contact'>
                <img src={vg} alt="" />
                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum reprehenderit tempore magni, quae atque illo vel quaerat. Enim voluptatibus illum doloremque mollitia esse maxime, earum
                        aspernatur, obcaecati repellendus consequuntur nihil!
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nulla temporibus pariatur ab mollitia sapiente illo porro necessitatibus libero, voluptatibus praesentium laboriosam ut voluptas! </p>
                </div>
            </div>

            <div className="Home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div
                            style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div
                            style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div
                            style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div
                            style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home