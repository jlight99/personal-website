import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <span className="menu-header">
                <a href="#about_me" className="section-header">home</a>
                <a href="#experience" className="section-header">experience</a>
                <a href="#projects" className="section-header">projects</a>
                <a href="/blog" className="section-header">blog</a>
            </span>
        )
    }
}

export default Menu;