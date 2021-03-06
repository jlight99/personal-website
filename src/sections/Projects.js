import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Tooltip from '@material-ui/core/Tooltip';
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <a id="projects">
                <span className="projects-section">
                    <div className="projects-header">projects</div>
                    <span className="projects">
                        <Card className="card">
                            <CardHeader
                                className="card-header"
                                title="Refactored Spoon"
                                subheader="nutrition-tracker web app"
                            />

                            <CardMedia
                                className="media"
                                image="resources/refactored-spoon-meals.png"
                                title="refactored spoon"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div>friendly web app to track daily meals and generate nutrition reports using the USDA database</div>
                                    <br></br>
                                    <span><i>React, Go, MongoDB</i></span>
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Tooltip title="check it out on github!">
                                    <a href="https://github.com/jlight99/refactored-spoon">
                                        <IconButton aria-label="source code">
                                            <CodeIcon className="code-icon"></CodeIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                                <Tooltip title="visit the running app!">
                                    <a href="https://jlight99.github.io/refactored-spoon">
                                        <IconButton aria-label="source code">
                                            <FastfoodIcon className="code-icon"></FastfoodIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                                <Tooltip title="read about my experiences building the app!">
                                    <a href="https://medium.com/@ellenhuang523/building-a-nutrition-tracking-app-with-react-go-and-mongodb-9f8da9e39e66">
                                        <IconButton aria-label="source code">
                                            <MenuBookIcon className="code-icon"></MenuBookIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </CardActions>
                        </Card>

                        <Card className="card">
                            <CardHeader
                                className="card-header"
                                title="Docker JIG"
                                subheader="automated load-testing"
                            />
                            <CardMedia
                                className="media"
                                image="resources/dockerjig.png"
                                title="docker jig"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div>
                                        classic load-testing solution (JMeter, InfluxDB, Grafana) automated with Docker to eliminate manual setup!
                                    </div>
                                    <br></br>
                                    <span><i>Docker, JMeter, InfluxDB, Grafana</i></span>
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Tooltip title="check it out on github!">
                                    <a href="https://github.com/jlight99/docker-jig">
                                        <IconButton aria-label="source code">
                                            <CodeIcon className="code-icon"></CodeIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                                <Tooltip title="read about my experiences building this project!">
                                    <a href="https://medium.com/@ellenhuang523/a-docker-solution-to-jmeter-influxdb-grafana-performance-testing-568848de7a0f">
                                        <IconButton aria-label="source code">
                                            <MenuBookIcon className="code-icon"></MenuBookIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </CardActions>
                        </Card>

                        <Card className="card">
                            <CardHeader
                                className="card-header"
                                title="Harry Potter Hangman"
                                subheader="desktop hp-themed hangman"
                            />
                            <CardMedia
                                className="media"
                                image="resources/hpsorting.png"
                                title="harry potter hangman"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div>fun desktop app that tests users' harry potter knowledge by challenging them to identify mystery characters!</div>
                                    <br></br>
                                    <span><i>Java, Swing</i></span>
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Tooltip title="check it out on github!">
                                    <a href="https://github.com/jlight99/Harry-Potter-Hangman">
                                        <IconButton aria-label="source code">
                                            <CodeIcon className="code-icon"></CodeIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </CardActions>
                        </Card>

                        <Card className="card">
                            <CardHeader
                                className="card-header"
                                title="Fruity Fun"
                                subheader="connect-4 with fruits on arduino"
                            />
                            <CardMedia
                                className="media"
                                image="resources/fruityfun.gif"
                                title="fruity fun"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div>fruit-themed connect-4 with autoshuffle and hint features on the arduino.</div>
                                    <div>my first ever programming project!</div>
                                    <br></br>
                                    <span><i>C, Arduino</i></span>
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Tooltip title="check it out on github!">
                                    <a href="https://github.com/beini19/fruity-fun">
                                        <IconButton aria-label="source code">
                                            <CodeIcon className="code-icon"></CodeIcon>
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </span>
                </span>
            </a>
        )
    }
}

export default Projects