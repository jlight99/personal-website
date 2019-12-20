import React from 'react';
import './BlogPost.css';
import BlogMenu from '../BlogMenu';

class DeploymentStruggles extends React.Component {
    render() {
        return (
            <span>
                <BlogMenu />
                <div>
                    <img src="/resources/githubreact.jpg" alt="sunrise over paris" className="img-header"></img>
                </div>

                <div className="post">
                    <div className="title">deployment struggles</div>
                    <div className="blog-date">2019/11/18</div>

                    <div className="post-content">
                        <p>
                        i’m going to spend this blog post talking about how i deployed this blog.
                        back when i first started, i was sure that building the blog from scratch would be the hardest part, but it turns out that once the blog was built, deploying it was actually the biggest pain.
                        </p>
                        <p>here are a few of the things i struggled with:
                        <ul>
                            <a href="#initial-deploy"><li id='initial-deploy'>deploying an initial build of the website</li></a>
                            <a href="#client-routing"><li id>finding a way around client-side routing not working</li></a>
                            <a href="#dns-config"><li>configuring dns</li></a>
                        </ul>
                        </p>
                        <p>
                            for context, i built this website using the react, setup using facebook’s create-react-app, and deployed it to github pages, github’s static site hosting service.
                        </p>
                    </div>
                </div>
            </span>
        )
    }
}