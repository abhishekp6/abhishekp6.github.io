import React from "react";
import angular from "../../assets/angular.png";
import aws from "../../assets/aws.svg";
import cpp from "../../assets/cpp.svg";
import express from "../../assets/express.png";
import git from "../../assets/git.png";
import js from "../../assets/js.png";
import mongo from "../../assets/mongo.png";
import node from "../../assets/node.svg";
import reactlogo from "../../assets/react.svg";

import "./Skills.css";

const Skills = () => {
    return(
        <div className="skillSec">
            <div className="skillContainer">
                <img alt="skillImg" src={angular} style={{height: 150, width:'8rem'}}></img>
                <div className="skillName">Angular
                <br></br>
                >10,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={reactlogo} style={{height: 150, width:'7rem'}}></img>
                <div className="skillName">ReactJs
                <br></br>
                >2,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={node} style={{height: 150, width:'8rem'}}></img>
                <div className="skillName">NodeJs
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={express} style={{height: 50, width:'8rem', marginTop:50, marginBottom:25}}></img>
                <div className="skillName">ExpressJs
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={mongo} style={{height: 125, width:'7rem', marginTop:0, marginBottom:0}}></img>
                <div className="skillName">MongoDB
                <br></br>
                    >1000 Queries Executed
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={git} style={{height: 50, width:'5rem', padding:20, marginTop:20, marginBottom:15}}></img>
                <div className="skillName">GIT
                <br></br>
                >20,000 Cammands Executed
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={cpp} style={{height: 150, width:'6rem', padding:20}}></img>
                <div className="skillName">C++
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={js} style={{height: 150, width:'7rem', padding:20}}></img>
                <div className="skillName">Javascript
                <br></br>
                >10,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={aws}style={{height: 100, width:'6rem', padding:20, marginTop:25, marginBottom:25}}></img>
                <div className="skillName">AWS
                <br></br>
                AWS Cloud Practitioner Certified 2022
                </div>
            </div>

        </div>
    )
}

export default Skills