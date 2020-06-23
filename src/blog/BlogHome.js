import React from 'react';
import './Blog.css';
import BlogMenu from './BlogMenu';

class BlogHome extends React.Component {
    render() {
        return (
            <span className="blog">
                <BlogMenu />
                <div className="headline">
                    welcome to my blog!
                </div>
                <div className="intro">
                    where i write about travelling, food, tech, or anything else i find interesting
                </div>
                <div className="blog-post">
                    <img src="resources/paristrip/parisdawn.jpg" alt="textnow logo" className="paris-img"></img>
                    <div>
                        <a href="/blog/paris-trip" className="blog-title">paris trip</a>
                    </div>
                </div>
            </span>
        )
    }
}

export default BlogHome