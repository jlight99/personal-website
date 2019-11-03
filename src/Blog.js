import React from 'react';
import './Blog.css';

class Blog extends React.Component {
    render() {
        return (
            <span>
                <span className="menu-header">
                    <a href="/" class="section-header">home</a>
                </span>
                <div className="blog">
                    welcome to my blog!
                </div>
            </span>
        )
    }
}

export default Blog