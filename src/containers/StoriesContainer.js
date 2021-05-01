import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { StaticCard } from '../components/StaticCard';
import Appbar from '../components/appbar'
import Chips from '../components/chips'

import {
  GlobalStyle,
  StoriesContainerWrapper,
} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

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
 
    </>
  );
};
