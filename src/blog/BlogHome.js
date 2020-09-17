import React from 'react';
import './Blog.css';
import BlogMenu from './BlogMenu';

class BlogHome extends React.Component {
    render() {
        return (
            <span className="blog">
                <BlogMenu />
                <div className="headline">
                    <a href="https://medium.com/@ellenhuang523">
                        find me on Medium!
                    </a>
                </div>
                <div className="blog-post">
                    <a href="https://medium.com/@ellenhuang523/building-a-nutrition-tracking-app-with-react-go-and-mongodb-9f8da9e39e66">
                        <span className="picture">
                            <img src="resources/ArchitectureDiagramGridless.png" alt="Refactored Spoon blog post picture"></img>
                        </span>
                        Building a nutrition-tracking app with React, Go, and MongoDB
                    </a>
                </div>
                <div className="blog-post">
                    <a href="https://medium.com/@ellenhuang523/a-docker-solution-to-jmeter-influxdb-grafana-performance-testing-568848de7a0f">
                        <span className="picture">
                            <img src="resources/dockerjig.png" alt="DockerJIG blog post picture"></img>
                        </span>
                        A Docker solution to JMeter + InfluxDB + Grafana performance testing
                    </a>
                </div>
                {/* <div className="headline">
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
                </div> */}
            </span>
        )
    }
}

export default BlogHome