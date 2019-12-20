import React from 'react';
import './Blog.css';
import BlogMenu from './BlogMenu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class BlogHome extends React.Component {
    render() {
        return (
            <span className="blog">
                <BlogMenu />
                <div className="headline">
                    welcome to my blog!
                </div>
                {/* <div className="intro">
                    i write about tech, food, travelling, and anything else i find interesting.
                    <br></br>
                    i've loved writing ever since i was a kid, but it feels like any writing i do these days is code.
                    <br></br>
                    i'm hoping to use this blog to practice expressing myself, document my experiences and thoughts, and rediscover my passion for writing.
                </div> */}
                <div className="blog-post">
                    {/* <img src="resources/paristrip/parisdawn.jpg" alt="textnow logo" className="paris-img"></img> */}
                    <div>
                        <a href="/blog/paris-trip" className="blog-title">paris trip</a>
                    </div>
                </div>
                <div className="blog-post">
                    <img src="resources/githubreact.jpg" alt="textnow logo" className="paris-img"></img>
                    <div>
                        <a href="/blog/deployment-struggles" className="blog-title">deployment struggles</a>
                    </div>
                </div>

                {/* <List className="root">
                    <ListItem className="root-item">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className="inline"
                                        color="textPrimary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this what hello why what is happening uhhhhhhhhhh what huh"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className="inline"
                                        color="textPrimary"
                                    >
                                        to Scott, Alex, Jennifer
              </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className="inline"
                                        color="textPrimary"
                                    >
                                        Sandra Adams
              </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List> */}
            </span>
        )
    }
}

export default BlogHome