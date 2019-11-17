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
                    this is a place where i plan to write about travelling, tech, food, or anything else i find interesting.
                    i've loved writing ever since i was a kid, but i find myself writing less and less as i grow older, and it seems like any writing i do these days is either code or documentation for code.
                    i'm hoping this blog will serve as a medium for me to rediscover my passion for writing and document my thoughts and experiences.
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