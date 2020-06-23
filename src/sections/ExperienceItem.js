import React from 'react';
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
                    <img className="experience-img-textnow" src={this.props.logoSrc} alt="textnow logo"></img>
                    <div>
                        <span className="experience-title">{this.props.jobTitle}</span>
                        <span className="experience-date">{this.props.startDate} - {this.props.endDate}</span>
                    </div>
                    <div className="experience-tech">tech stack: {this.props.techStack}</div>

                    {this.state.showDescription && <div className="experience-text">{this.props.description}</div>}
                    <a className="toggle-expand" onClick={this.toggleDescription}>
                        {this.state.showDescription ? "read less" : "read more"}
                    </a>
                </span>
            </div>
        );
    }
}
export default ExperienceItem;