import React from 'react';
import BlogMenu from './BlogMenu';
// import mediumIcon from 'resources/medium-2177.svg' // depending on your folder structure

import './Blog.css';

class BlogHome extends React.Component {
    render() {
        return (
            <span className="blog">
                <BlogMenu />
                <div className="headline">
                    <a href="https://medium.com/@ellenhuang523">
                        Find me on Medium!
                        <img id='medium-icon' src="resources/medium-2177.svg" />
                    </a>
                </div>
                <div className="blog-post">
                    <a href="https://medium.com/@ellenhuang523/building-a-nutrition-tracking-app-with-react-go-and-mongodb-9f8da9e39e66">
                        <span className="picture">
                            <img src="resources/ArchitectureDiagramGridless.png" alt="Refactored Spoon blog post picture"></img>
                        </span>
                        <span className="medium-caption">
                            Building a nutrition-tracking app with React, Go, and MongoDB
                        </span>
                    </a>
                </div>
                <div className="blog-post">
                    <a href="https://medium.com/@ellenhuang523/a-docker-solution-to-jmeter-influxdb-grafana-performance-testing-568848de7a0f">
                        <span className="picture">
                            <img src="resources/projects/dockerjig.png" alt="DockerJIG blog post picture"></img>
                        </span>
                        <span className="medium-caption">
                            A Docker solution to JMeter + InfluxDB + Grafana performance testing
                        </span>
                    </a>
                </div>
            </span>
        )
    }
}

export default BlogHome