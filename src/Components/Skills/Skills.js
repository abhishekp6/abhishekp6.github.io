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
                <img alt="skillImg" src={angular} style={{height: 150, width:150}}></img>
                <div className="skillName">Angular
                <br></br>
                >10,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={reactlogo} style={{height: 150, width:150}}></img>
                <div className="skillName">ReactJs
                <br></br>
                >2,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={node} style={{height: 150, width:125}}></img>
                <div className="skillName">NodeJs
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={express} style={{height: 50, width:200, marginTop:50, marginBottom:25}}></img>
                <div className="skillName">ExpressJs
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={mongo} style={{height: 125, width:200, marginTop:0, marginBottom:0}}></img>
                <div className="skillName">MongoDB
                <br></br>

                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={git} style={{height: 50, width:150, padding:20, marginTop:20, marginBottom:15}}></img>
                <div className="skillName">GIT
                <br></br>

                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={cpp} style={{height: 150, width:150, padding:20}}></img>
                <div className="skillName">C++
                <br></br>
                >5,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={js} style={{height: 150, width:150, padding:20}}></img>
                <div className="skillName">Javascript
                <br></br>
                >10,000 Lines of Code
                </div>
            </div>

            <div className="skillContainer">
                <img alt="skillImg" src={aws}style={{height: 100, width:200, padding:20, marginTop:25, marginBottom:25}}></img>
                <div className="skillName">AWS
                <br></br>
                AWS Cloud Practitioner Certified 2022
                </div>
            </div>

        </div>
    )
}

export default Skills