import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import JobList from './GroupElements/Job/JobList'
import NewsList from './GroupElements/News/NewsList'
import EventList from './GroupElements/Event/EventList';

export default function BasicButtonGroup() {
  const [activeButton, setActiveButton] = useState('Jobs');
  const[jobs, showJobs] = useState(true);
  const [news, showNews] = useState(false);
  const[events, showEvents] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    if (buttonName === 'Jobs') {
      showJobs(true);
    } else {
      showJobs(false)
    }
    if (buttonName === 'News Feed'){
      showNews(true);
    } else{
      showNews(false);
    }
    if (buttonName === 'Events'){
      showEvents(true);
    } else{
      showEvents(false);
    }
  };

  return (
  
    <>
    <div className='absolute'>
    <div className='bg-white z-10 sticky top-12'>
    <ButtonGroup
      variant="contained"
      aria-label="outlined secondary button group"
      sx={{ width: '29vw' }}
      className="mt-1 mx-2 sticky z-20 mb-1 h-auto"
      style={{top: ''}}
    >
      <Button
        sx={{
          width: '100%',
          color: 'white',
          backgroundColor: '#60A5FA',
          fontWeight: '50px',
          fontFamily: 'Verdana',
          '&:hover': {
            color: 'white',
            backgroundColor: '#DC2626',
          },
          ...(activeButton === 'Jobs' && {
            color: 'white',
            backgroundColor: '#DC2626',
          }),
        }}
        onClick={() => handleButtonClick('Jobs')}
      >
        Jobs
      </Button>
      <Button
        sx={{
          width: '100%',
          color: 'white',
          backgroundColor: '#60A5FA',
          fontWeight: '50px',
          fontFamily: 'Verdana',
          '&:hover': {
            color: 'white',
            backgroundColor: '#DC2626',
          },
          ...(activeButton === 'News Feed' && {
            color: 'white',
            backgroundColor: '#DC2626',
          }),
        }}
        onClick={() => handleButtonClick('News Feed')}
      >
        News Feed
      </Button>
      <Button
        sx={{
          width: '100%',
          color: 'white',
          backgroundColor: '#60A5FA',
          fontWeight: '50px',
          fontFamily: 'Verdana',
          '&:hover': {
            color: 'white',
            backgroundColor: '#DC2626',
          },
          ...(activeButton === 'Events' && {
            color: 'white',
            backgroundColor: '#DC2626',
          }),
        }}
        onClick={() => handleButtonClick('Events')}
      >
        Events
      </Button>
    </ButtonGroup>
     
    {/* <span className="text-2xl font-bold text-center ml-64">BLOGS</span> */}

    </div>
    <div className="z-0 bg-white border" style={{width: '30vw', marginTop: '8vh'}}>

    {
      jobs && (
        <JobList/>
      )
    }
    {
      news && (
        <NewsList/>
      )
    }
    {
      events && (
        <EventList/>
      )
    }
    </div>
    </div>
    </>
  );
}
