import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <span className="menu-header">
                <a href="#about_me" className="section-header">Home</a>
                <a href="#experience" className="section-header">Experience</a>
                <a href="#projects" className="section-header">Projects</a>
                <a href="/blog" className="section-header">Blog</a>
            </span>
        )
    }
}

export default Menu;