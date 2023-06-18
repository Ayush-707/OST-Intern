import React from 'react';
import Card from './Event';

const EventList = () => {
    const eventData = [
        {
          eventName: 'Tech Conference 2023',
          date: '15-17 July',
          location: 'San Francisco',
          image: '/Events/confer.jpeg',
          link: '/',
        },
        {
          eventName: 'Design Summit',
          date: '22-24 August',
          location: 'New York City',
          image: 'Events/design.jpg',
          link: '/',
        },
        {
          eventName: 'Startup Expo',
          date: '5-7 September',
          location: 'London',
          image: 'Events/expo.jpg',
          link: '/',
        },
        {
          eventName: 'AI Symposium',
          date: '12-14 October',
          location: 'Tokyo',
          image: 'Events/simp.jpeg',
          link: '/',
        },
        {
          eventName: 'Frontend Developer Conference',
          date: '20-22 November',
          location: 'Berlin',
          image: 'Events/frontend.png',
          link: '/',
        },
        {
          eventName: 'Data Science Summit',
          date: '8-10 December',
          location: 'Chicago',
          image: 'Events/data.jpeg',
          link: '/',
        },
      ];
      

  return (
    <div className=" mx-1 z-10">
      {eventData.map((card, index) => (
        <Card
          key={index}
          eventName={card.eventName}
          date={card.date}
          location={card.location}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default EventList;
