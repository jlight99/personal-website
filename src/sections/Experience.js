import React from 'react';
import './Experience.css';

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loopActive: false,
            shuffleActive: false,
        }

        this.handleClickTech = this.handleClickTech.bind(this)
    }

    handleClickTech(event) {
        this.setState({ selectedItem: event.target.value })
    }

    render() {
        return (
            <a id="experience">
                <span value="0" onMouseOver={this.handleClickTech} className="experience-section">
                    <div className="experience-header">experience</div>
                    <div className="experience-item">
                        <span className="experience-body">
                            <span className="experience-title">
                                backend developer
                                <span className="at"> @ </span>
                                <img className="experience-img-textnow" src="resources/textnow_name.jpeg" alt="textnow logo"></img>
                            </span>
                            <span className="experience-date-textnow">september 2019 - december 2019</span>
                            <div className="experience-tech">tech stack: Golang, gRPC/Protobuf, SQL, Redis</div>
                            <div className="experience-text">
                                My third co-op was at TextNow, a 10-year-old startup whose main product was a free calling and texting app.
                                I was a member of the backend team, which dealt with everything from fraud to feature development.
                                One of the app's greatest draws was the real phone number it assigned users, and my main project
                                was building a service which tested these numbers to ensure they are able to receive calls and messages before assigning them.
                                My service tested over 125K numbers in production over the course of a day and greatly bolstered number availability.
                                It improved upon the existing solution by reducing testing time per number from nearly a day to under a minute
                                by verifying the numbers concurrently, introduced retesting logic for failed numbers, and added monitoring.
                                Aside from the phone number verification service, I also contributed to anti-abuse efforts
                                by building a URL parser to drop suspicious texts and storing the IP information of
                                fraudulent users in a Redis cache to prevent future frauds.
                            </div>
                        </span>
                    </div>

                    <br></br>

                    <div className="experience-item">
                        <span className="experience-body">
                            <div>
                                <span className="experience-title">
                                    full-stack developer
                                    <span className="at"> @ </span>
                                    <img className="experience-img-sap" src="resources/sap.png" alt="sap logo"></img>
                                </span>
                                <span className="experience-date-sap">january 2019 - april 2019</span>
                            </div>
                            <div className="experience-tech">tech stack: Java, Angular, Docker, SQL</div>
                            <div className="experience-text">
                                My second co-op was at SAP, where I worked on the Commerce Cloud. Specifically, my team worked on the
                                tool which automated the provisioning and deployment of the Commerce Cloud. The main feature the team
                                worked on during my time there was an autoscaling feature, which scaled the number of storefront pods based on demand.
                                I implemented the autoscaling settings page on the portal to enable customers to customize the autoscaling feature,
                                including turning on/off autoscaling, seting min/max bounds for the number of pods, choosing the scaling metric, etc.
                                I also improved the autoscaling testing solution by automating load generation, and reduced manual setup time by over 90%.
                            </div>
                        </span>
                    </div>

                    <br></br>


                    <div className="experience-item">
                        <span className="experience-body">
                            <div>
                                <span className="experience-title">
                                    software developer
                                    <span className="at"> @ </span>
                                    <img className="experience-img-dematic" src="resources/Dematic_Logo_Rect.png" alt="dematic logo"></img>
                                </span>
                                <span className="experience-date-dematic">may 2018 - august 2018</span>
                            </div>
                            <div className="experience-tech">tech stack: Java, Tableau, SQL</div>
                            <div className="experience-text">
                                My very first co-op was at Dematic, a supply chain solutions company, where my team led the migration of
                                the Dematic software to cloud, and worked on decomposing the existing monolith into microservices.
                                My main project was building interactive dashboards with Tableau to help customers monitor KPIs.
                                I successfully demoed these dashboards to company executives, and the dashboards were later demoed at the MHLC international conference.
                                Additionally, I built a service to save polygon coordinates in the database, which laid the foundation for the development
                                of map drilldown features.
                            </div>
                        </span>
                    </div>
                </span>
            </a>
        )
    }
}

export default Experience;