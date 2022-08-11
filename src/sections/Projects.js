import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Tooltip from '@material-ui/core/Tooltip';

import './Projects.css';
import ProjectItem from './ProjectItem';

class Projects extends React.Component {
    render() {
        return (
            <span id="projects">
                <span className="projects-section">
                    <div className="projects-header">Projects</div>

                    <div className="projects-intro">
                        Here are a few fun projects I worked on!
                    </div>

                    <span className="projects">
                        <ProjectItem
                            projectName="Refactored Spoon"
                            projectSubtitle="Nutrition-tracker web app"
                            projectImgPath="resources/projects/refactored-spoon-meals.png"
                            projectImgName="refactored spoon"
                            projectDescription="Friendly web app to track daily meals and generate nutrition reports using the USDA database"
                            projectTech="React, Go, MongoDB"
                            projectCardActions={
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
                            }
                        />

                        <ProjectItem
                            projectName="Docker JIG"
                            projectSubtitle="Automated load-testing"
                            projectImgPath="resources/projects/dockerjig.png"
                            projectImgName="docker jig"
                            projectDescription="Classic load-testing solution (JMeter, InfluxDB, Grafana) automated with Docker to eliminate manual setup!"
                            projectTech="Docker, JMeter, InfluxDB, Grafana"
                            projectCardActions={
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
                            }
                        />

                        <ProjectItem
                            projectName="Harry Potter Hangman"
                            projectSubtitle="Desktop HP-themed hangman"
                            projectImgPath="resources/projects/hpsorting.png"
                            projectImgName="harry potter hangman"
                            projectDescription="Fun desktop app that tests users' Harry Potter knowledge by challenging them to identify mystery characters!"
                            projectTech="Java, Swing"
                            projectCardActions={
                                <CardActions disableSpacing>
                                    <Tooltip title="check it out on github!">
                                        <a href="https://github.com/jlight99/Harry-Potter-Hangman">
                                            <IconButton aria-label="source code">
                                                <CodeIcon className="code-icon"></CodeIcon>
                                            </IconButton>
                                        </a>
                                    </Tooltip>
                                </CardActions>
                            }
                        />

                        <ProjectItem
                            projectName="Fruity Fun"
                            projectSubtitle="Connect-4 with fruits on Arduino"
                            projectImgPath="resources/projects/fruityfun.gif"
                            projectImgName="fruity funn"
                            projectDescription="Fruit-themed Connect-4 with autoshuffle and hint features on the Arduino. My first programming project!"
                            projectTech="C, Arduino"
                            projectCardActions={
                                <CardActions disableSpacing>
                                    <Tooltip title="check it out on github!">
                                        <a href="https://github.com/beini19/fruity-fun">
                                            <IconButton aria-label="source code">
                                                <CodeIcon className="code-icon"></CodeIcon>
                                            </IconButton>
                                        </a>
                                    </Tooltip>
                                </CardActions>
                            }
                        />
                    </span>
                </span>
            </span>
        )
    }
}

export default Projects