import React from "react";
import '../style/footer.scss'


const Footer = () => {
    return (
        <footer>
            <div>
                <h1>JeetCare</h1>
                <p>@all right reserved</p>
            </div>

            <div>
                <h5>Foolow us</h5>
                <div>  
                    <a href="https://www.google.com" target={"blank"}>Google</a>
                    <a href="https://www.instagram.com" target={"blank"}>Instagram</a>
                    <a href="https://www.GitHub.com" target={"blank"}>GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer