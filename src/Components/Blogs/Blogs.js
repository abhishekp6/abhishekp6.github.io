import React from "react";
import './Blogs.css';

const Blogs = () => {
    return(
        <div className="contianer">
            <div className="article">
                <h2>Understanding Redux with React</h2>
                <div className="text1">
                    Redux is an open-source javascript library used for managing and centralizing an application’s state.
                </div>
                <div className="text2">Published on Apr 2, 2022.</div>
                <div className="text3">4 min read <button className="read" onClick={() => {window.open('https://medium.com/@abhishekp6/understanding-redux-with-react-22940c1e49af')}}>Read</button></div>
            </div>
        </div>
    )
}

export default Blogs