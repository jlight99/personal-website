import React, { Component } from 'react';
import App from './App';
import Blog from './sections/Blog';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './MenuSections.css';

class MenuSections extends Component {
    render() {
        return (
            <span class="menu-header">
                {/* <Router>
                <Link to="/">home</Link>
                <Route exact path="/" component={App} />
                <AnchorLink href="#home">home</AnchorLink>
                <AnchorLink href="#experience">experience</AnchorLink>
                <AnchorLink href="#projects">projects</AnchorLink>
                    <Link to="/blog">blog</Link>
                    <Route path="/blog" component={Blog} />
                </Router> */}
                <a href="#about_me" class="section-header">home</a>
                <a href="#experience" class="section-header">experience</a>
                <a href="#projects" class="section-header">projects</a>
                <a href="#blog" class="section-header">blog</a>
{/* 
                <Router>
                    <Link to="/blog" class="section-header">blog</Link>
                    <Route path="/blog" component={Blog}></Route>
                </Router> */}
            </span>
        )
    }
}

export default MenuSections;