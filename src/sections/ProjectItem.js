import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


import './Projects.css';

class ProjectItem extends React.Component {
    render() {
        return (
            <span>
                <Card className="card">
                    <CardHeader
                        className="card-header"
                        title={this.props.projectName}
                        subheader={this.props.projectSubtitle}
                    />

                    <CardMedia
                        className="media"
                        image={this.props.projectImgPath}
                        title={this.props.projectImgName}
                    />

                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            <br/>
                            <span>{this.props.projectDescription}</span>
                            <br/><br/>
                            <span><FontAwesomeIcon icon={faCog} style={{ paddingRight: "5px" }}/>{this.props.projectTech}</span>
                        </Typography>
                    </CardContent>

                    {this.props.projectCardActions}
                </Card>
            </span>
        )
    }
}
export default ProjectItem;