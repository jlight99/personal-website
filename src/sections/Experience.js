import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    render() {
        return (
            <a id="experience">
                <span className="experience-section">
                    <div className="experience-header">experience</div>
                    <div className="experience-item">
                        <span className="experience-image">
                            <img className="experience-img" src="resources/textnow.jpg"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li>golang</li>
                                <li>grpc/protobuf</li>
                                <li>sql</li>
                                <li>php</li>
                                <li>ruby</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>textnow</h3>
                            <span className="position">backend developer</span>
                            <span className="date">may to august 2018</span>
                            <ul>
                                <li>built go microservice with grpc to concurrently verify sms/calling functionality of phone numbers and store
results in aurora database; service is deployed to kubernetes and running in aws</li>
                                <li>fortified spam detection by building a url parser to identify url in text messages and drop suspicious messages</li>
                                <li>advanced anti-fraud measures by recording asn of fraudulent users in redis cache, and implementing logic to
evaluate whether to delay user’s purchase based on their asn and purchase history, saving $2000/day in fraud cost</li>
                            </ul>
                        </span>
                    </div>

                    <div className="experience-item">
                        <span className="experience-image">
                            <img className="experience-img" src="resources/sap.png"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li>java</li>
                                <li>sql</li>
                                <li>angular</li>
                                <li>docker</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>sap</h3>
                            <span className="position">full-stack developer</span>
                            <span className="date">january to april 2019</span>
                            <ul>
                                <li>developed configuration of autoscaling feature which scaled customer storefront pods based on load; constructed
angular ui to accept values and java server-side logic to store values in microsoft sql database</li>
                                <li>improved autoscaling testing solution by automating load generation, reduced manual setup time by >90%</li>
                            </ul>
                        </span>
                    </div>

                    <div className="experience-item">
                        <span className="experience-image">
                            <img className="experience-img" src="resources/dematic.png"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li>java</li>
                                <li>tableau</li>
                                <li>angular</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>dematic</h3>
                            <span className="position">backend/analytics developer</span>
                            <span className="date">may to august 2018</span>
                            <ul>
                                <li>constructed a tableau dashboard configuration microservice in java, which accepted coordinates from web
interface and drew polygons on dashboard maps, enabling the development of map drilldown features</li>
                                <li>created interactive tableau dashboards which were demoed at the mhlc international conference</li>
                            </ul>
                        </span>
                    </div>
                </span>
            </a>
        )
    }
}

export default Experience;