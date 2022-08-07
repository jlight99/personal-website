import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './Experience.css';

class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDescription: false,
        };
        this.toggleDescription = this.toggleDescription.bind(this);

    }

    toggleDescription() {
        this.setState({showDescription: !this.state.showDescription});
    }

    render() {
        return (
            <div className="experience-item">
                <span className="experience-body">
                    <img className="experience-img" src={this.props.logoSrc} alt="company logo"></img>
                    <div>
                        <span className="experience-title">{this.props.jobTitle}</span>
                        <span className="experience-date">{this.props.startDate} - {this.props.endDate}</span>
                    </div>
                    <div className="experience-tech">
                        <FontAwesomeIcon icon={faCog} style={{ paddingRight: "5px" }}/>
                        {this.props.techStack}
                    </div>

                    {this.state.showDescription && <div className="experience-text">{this.props.description}</div>}
                    <br/>
                    <a className="toggle-expand" onClick={this.toggleDescription}>
                        {this.state.showDescription ? "Read less" : "Read more"}
                    </a>
                </span>
            </div>
        );
    }
}
export default ExperienceItem;