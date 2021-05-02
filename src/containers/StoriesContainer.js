import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { StaticCard } from '../components/StaticCard';
import Appbar from '../components/appbar'
import Chips from '../components/chips'
import { STORY_INCREMENT } from '../constants'
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
    height: '70px',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
    border: '1px solid',
    borderRadius: '0.8rem',
    lineHeight: 1.5,
    backgroundColor: '#ebc334',
    borderColor: '#ebc334',
    fontFamily: 'Arial black',
    '&:hover': {
      backgroundColor: '#ebdc34',
      borderColor: '#ebdc34',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ebdc34',
      borderColor: '#ebdc34',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export const StoriesContainer = () => {
  const [count, setCount] = useState(STORY_INCREMENT);
  const [storyIds, setStoryIds] = useState([]);

  const loadmore = () => {
    setCount(count + STORY_INCREMENT)
  } 

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
  
  <Appbar/>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
    
    <Chips/>
      
        {storyIds.slice(0, count).map(storyId => (
          <StaticCard key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
      <div style={{marginLeft:"22px", marginRight:"22px"}}>
        <BootstrapButton variant="contained" color="primary" onClick={loadmore}>
          Load More
        </BootstrapButton>
    </div>
    </>
  );
};
