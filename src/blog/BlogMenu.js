import React, { Component } from 'react';
import '../Menu.css';

class BlogMenu extends Component {
    render() {
        return (
            <span className="menu-header">
                <a href="/" class="section-header">me</a>
                <a href="/blog" class="section-header">blog</a>
            </span>
        )
    }
}

export default BlogMenu;