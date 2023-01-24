import React from "react";
import './Contact.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import mail from'../../assets/gmail.png'

const Contact = () => {
    return(
        <div>
            <div className="headMessage">Lets Connect</div>
            <div className="handles">
                <img className="socials" alt="socials" src={linkedin} onClick={() => {window.open("https://www.linkedin.com/in/abhishekp6")}}></img>
                <img className="socials" alt="socials" src={github} onClick={() => {window.open("http://github.com/abhishekp6")}}></img>
                <img className="socials" alt="socials" src={twitter} onClick={() => {window.open("https://twitter.com/Abhlshek_")}}></img>
                <img className="socials" alt="socials" src={mail} onClick={() => {window.location = 'mailto:ap074092@gmail.com'}}></img>
            </div>
        </div>
    )
}

export default Contact