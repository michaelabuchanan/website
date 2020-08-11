import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import { Route, NavLink, HashRouter } from 'react-router-dom';

import { posts } from "../data/project_info";
import Gans from "../pages/gans.js"
import ToDo from "../pages/ToDo"

function Posts(props) {
  return (
    <div style={{ marginTop: 50, padding: 50}}>
    <HashRouter>
      <Grid container spacing={4} justify="center" >
        {posts.map(post => (
          <Grid item key={post.title}>
            <Card style={{ width: '18rem', opacity:"1" }}>
              <NavLink exact activeClassName="active" to="/gans"><CardActionArea>
                <CardMedia
                  component="img"
                  alt="A picture is supposed to be here!"
                  height="200"
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography component="p">{post.caption}</Typography>
                </CardContent>
              </CardActionArea></NavLink>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </HashRouter>
    </div>
  );
}

export default Posts;
