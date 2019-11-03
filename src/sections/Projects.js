import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <a id="projects">
                <div className="projects-header">projects</div>
                <span className="projects">
                    <Card className="card">
                        <CardHeader
                            title="refactored spoon"
                            subheader="food journal web app"
                        />
                        <CardMedia
                            className="media"
                            image="resources/refactoredspoon.png"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                a friendly web app to track daily meals, store saved meals and generate nutrition reports from USDA database
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="card">
                        <CardHeader
                            title="harry potter hangman"
                            subheader="desktop hp-themed hangman"
                        />
                        <CardMedia
                            className="media"
                            image="resources/hpsorting.png"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                fun desktop app that tests users' harry potter knowledge by challenging them to identify mystery characters using clues!
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card className="card">
                        <CardHeader
                            title="fruity fun"
                            subheader="connect-4 with fruits on arduino"
                        />
                        <CardMedia
                            className="media"
                            image="resources/fruityfun.gif"
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                arduino-based classic connect-4 with a fresh, fruity twist!
                            </Typography>
                        </CardContent>
                    </Card>
                </span>
            </a>
        )
    }
}

export default Projects