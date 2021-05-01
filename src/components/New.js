import './components.css';
import React, { useEffect, useState } from 'react';
import Appbar from './appbar'
import Chips from './chips'
import {StaticCard} from './StaticCard'
import CustomizedButtons from './loadmore_btn'
import Footer from './footer'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { getStoryIds } from '../services/hnApi';
function New() {
    const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);

  return (
    <>
    <Appbar/>
    <Chips/>
    {storyIds.slice(0, count).map(storyId => (
         
          <StaticCard key={storyId} storyId={storyId}/>
        ))}
    
    <CustomizedButtons/>
    <Footer/>
    </>
  );
}

export default New;