import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
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

                        <CardActions disableSpacing>
                            <a href="https://github.com/jlight99/refactored-spoon">
                                <IconButton aria-label="source code">
                                    <CodeIcon className="code-icon"></CodeIcon>
                                </IconButton>
                            </a>
                        </CardActions>

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

                        <CardActions disableSpacing>
                            <a href="https://github.com/jlight99/Harry-Potter-Hangman">
                                <IconButton aria-label="source code">
                                    <CodeIcon className="code-icon"></CodeIcon>
                                </IconButton>
                            </a>
                        </CardActions>
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

                        <CardActions disableSpacing>
                            <a href="https://github.com/beini19/fruity-fun">
                                <IconButton aria-label="source code">
                                    <CodeIcon className="code-icon"></CodeIcon>
                                </IconButton>
                            </a>
                        </CardActions>
                    </Card>
                </span>
            </a>
        )
    }
}

export default Projects