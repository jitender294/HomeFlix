import React from 'react'
import { HashLink } from 'react-router-hash-link';
import '../style/Header.scss'

const Header = () => { 
    return (  
        <>  
        <nav>  
            <h1>Jitender</h1>    
            <main>
                <HashLink to="/#Home">Home</HashLink>  
                <HashLink to="/Contact">Contact</HashLink>  
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#brands">Brands</HashLink>    
                <HashLink to="/Services">Services</HashLink>
            </main>
        </nav>
        
     </>

    );
}

export default Header;
