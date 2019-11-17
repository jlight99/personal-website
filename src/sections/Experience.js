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
                        <span className="experience-image">
                            <img className="experience-img" src="resources/textnow.jpg" alt="textnow logo"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li value="1">golang</li>
                                <li value="2">grpc/protobuf</li>
                                <li value="6">sql</li>
                                <li value="3">php</li>
                                <li value="5">redis</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>textnow</h3>
                            <span className="position">backend developer</span>
                            <span className="date">september to present</span>
                            <ul>
                                <li className={this.state.selectedItem === 1 || this.state.selectedItem === 2 || this.state.selectedItem === 6 ? "on" : "off"}>
                                    built phone number verification microservice to concurrently verify sms/calling functionality of numbers and store
results in database; service is deployed via kubernetes running in aws</li>
                                <li className={this.state.selectedItem === 1 ? "on" : "off"}>fortified spam detection by building a url parser to identify url in text messages and drop suspicious messages</li>
                                <li className={this.state.selectedItem === 3 || this.state.selectedItem === 5 ? "on" : "off"}>advanced anti-fraud measures by recording asn of fraudulent users in redis cache, and implementing logic to
evaluate whether to delay user’s purchase based on their asn and purchase history, saving >$2000/day in fraud cost</li>
                            </ul>
                        </span>
                    </div>

                    <div className="experience-item">
                        <span className="experience-image">
                            <img className="experience-img" src="resources/sap.png" alt="sap logo"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li value="7">java</li>
                                <li value="8">sql</li>
                                <li value="9">angular</li>
                                <li value="10">docker</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>sap</h3>
                            <span className="position">full-stack developer</span>
                            <span className="date">january to april 2019</span>
                            <ul>
                                <li className={this.state.selectedItem === 7 || this.state.selectedItem === 8 || this.state.selectedItem === 9 ? "on" : "off"}>developed configuration of autoscaling feature which scaled customer storefront pods based on load; constructed
angular ui to accept values and java server-side logic to store values in microsoft sql database</li>
                                <li className={this.state.selectedItem === 10 ? "on" : "off"}>improved autoscaling testing solution by automating load generation, reduced manual setup time by >90%</li>
                            </ul>
                        </span>
                    </div>

                    <div className="experience-item">
                        <span className="experience-image">
                            <img className="experience-img" src="resources/dematic.png" alt="dematic logo"></img>
                        </span>
                        <span className="experience-tech">
                            <ul>
                                <li value="11">java</li>
                                <li value="12">tableau</li>
                                <li value="13">angular</li>
                            </ul>
                        </span>
                        <span className="experience-text">
                            <h3>dematic</h3>
                            <span className="position">backend/analytics developer</span>
                            <span className="date">may to august 2018</span>
                            <ul>
                                <li className={this.state.selectedItem === 11 || this.state.selectedItem === 13 ? "on" : "off"}>constructed a tableau dashboard configuration microservice in java, which accepted coordinates from web
interface and drew polygons on dashboard maps, enabling the development of map drilldown features</li>
                                <li className={this.state.selectedItem === 12 ? "on" : "off"}>created interactive tableau dashboards which were demoed at the mhlc international conference</li>
                            </ul>
                        </span>
                    </div>
                </span>
            </a>
        )
    }
}

export default Experience;