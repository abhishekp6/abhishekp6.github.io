import React from "react";
import './Blogs.css';

const Blogs = () => {
    return(
        <div className="contianer">
            <div className="article">
                <a className="linkToArticle" target={"_blank"} href={"https://medium.com/@abhishekp6/understanding-redux-with-react-22940c1e49af"} rel="noreferrer">1. Understanding Redux with React</a>
            </div>
            <div className="article">
                <a className="linkToArticle" target={"_blank"} href={"https://medium.com/@abhishekp6/first-principles-of-oauth-2-0-477770dc429e"} rel="noreferrer">2. First Principles of OAuth 2.0</a>
            </div>
        </div>
    )
}

export default Blogs