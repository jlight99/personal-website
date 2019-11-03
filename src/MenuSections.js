import React, { Component } from 'react';
import './MenuSections.css';

class MenuSections extends Component {
    render() {
        return (
            <span class="menu-header">
                <a href="#about_me" class="section-header">home</a>
                <a href="#experience" class="section-header">experience</a>
                <a href="#projects" class="section-header">projects</a>
                <a href="/blog" class="section-header">blog</a>
            </span>
        )
    }
}

export default MenuSections;