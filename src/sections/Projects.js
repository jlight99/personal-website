import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Projects.css';

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loopActive: false,
            shuffleActive: false,
            expanded: false,
            expandProject: "",
        }

        this.handleExpandClick = this.handleExpandClick.bind(this)
    }

    handleExpandClick(project) {
        this.setState({ expandProject: this.state.expandProject === "" ? project : "" })
    }

    render() {
        return (
            <a id="projects">
                <span className="projects-section">
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

                                <IconButton
                                    onClick={() => this.handleExpandClick("refactored-spoon")}
                                    aria-expanded={this.state.expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={this.state.expandProject === "refactored-spoon"} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>mongodb</div>
                                    <div>express</div>
                                    <div>angular</div>
                                    <div>nodejs</div>
                                </CardContent>
                            </Collapse>
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

                                <IconButton
                                    onClick={() => this.handleExpandClick("hp-hangman")}
                                    aria-expanded={this.state.expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={this.state.expandProject === "hp-hangman"} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>java</div>
                                    <div>swing</div>
                                </CardContent>
                            </Collapse>
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

                                <IconButton
                                    onClick={() => this.handleExpandClick("fruity-fun")}
                                    aria-expanded={this.state.expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={this.state.expandProject === "fruity-fun"} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <div>c</div>
                                    <div>arduino</div>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </span>
                </span>
            </a>
        )
    }
}

export default Projects