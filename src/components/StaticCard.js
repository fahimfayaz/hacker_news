import React, { useState, useEffect, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getStoryIds } from '../services/hnApi';
import { getStory } from '../services/hnApi';
import { mapTime } from '../mappers/mapTime';

const useStyles = makeStyles({
  root: {
    margin: 18,
    minWidth: 275,
    boxShadow: '1px 3px 5px #888888',
    '&:hover':{
        boxShadow: '2px 6px 10px 4px #888888',
        transition: '0.5s',
        transform: 'scale(1)',
    }
  },
  title: {
    fontSize: 14,
    marginTop: 12,
  },
  body: {
    marginTop: 12,
  },
});

export const StaticCard= memo(function StaticCard({ storyId }) { 
  const classes = useStyles();
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        <a href={story.url}>{story.title}</a>
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          Kayaks crowd Three Sister Springs, 
          <br/> 
          where people and manetees maintain controversial coexistance. 
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {mapTime(story.time)}
        </Typography>
      </CardContent>
    </Card>
  ):null;
})
