import React from "react";
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="navBar">
                <label className="navItem" onClick={() => {navigate("/")}}>Home</label>
                <label className="navItem" onClick={() => {navigate("/projects")}}>Projects</label>
                <label className="navItem" onClick={() => {navigate("/blogs")}}>Blogs</label>
                <label className="navItem" onClick={() => {navigate("/skills")}}>Skills</label>
                <label className="navItem" onClick={() => {navigate("/contact")}}>Contact</label>
            </div>
        </div>
    )
}

export default Navbar