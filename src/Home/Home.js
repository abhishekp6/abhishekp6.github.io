import React from 'react';
import './Home.css';
import profile from '../assets/Profile.jpeg';
import footer from '../assets/footerImg.jpeg'
import Typewriter from "typewriter-effect";

const Home = () => {
    return(
        <div>
            <div className="header">

                <img src={profile} alt="" className="profileImg"></img>
                <h1 className="nameTag">Abhishek Pandey</h1>
                <h1 className="desc"><Typewriter
                    options={{
                    loop: true,
                    }}
                    onInit={(typewriter)=> {
                    typewriter.typeString("Software Engineer")
                    .pauseFor(1000)
                    .deleteChars(17)
                    .typeString("Full Stack Dev")
                    .pauseFor(1000)
                    .start();
                    }} />
                </h1>
            </div>

            <div className="midLine"></div>

            <div className="about">

                Hello there, welcome to my space. 

                I am 25 year young Software Engineer from India. I love developing/building/creating/improving.
                Currently I am working with awesome folks at Lumiq.
                <br></br>
                <br></br>
                I have completed my undergrad in Computer Science from Jaypee Institute of Information Technology, Noida, India, in 2021.
                <br></br>
                <br></br>
                I am a strong believer in building for humanity. I support the cause of quality education to each. I am a supporter of environmental sustainability.

            </div>

            <div className="midLine"></div>

            <div className="footer">
                <div className="footerText">
                    Handcrafted with Love by Abhishek
                    <br></br>
                    <div className="copyright">
                        Copyright © Abhishek Pandey 2023
                    </div>
                </div>
                <div>
                    <img src={footer} alt='footerImg'></img>
                </div>
            </div>
            
        </div>
    );
}

export default Home;