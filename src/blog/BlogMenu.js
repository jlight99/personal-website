import React, { Component } from 'react';
import '../Menu.css';

class BlogMenu extends Component {
    render() {
        return (
            <span className="menu-header">
                <a href="/" class="section-header">Home</a>
                <a href="/blog" class="section-header">Blog</a>
            </span>
        )
    }
}

export default BlogMenu;