import React from 'react';
import Card from './Jobs';

const CardList = () => {
  const cardData = [
    {
      company: 'Microsoft',
      profile: 'Software Engineer',
      lastDate: '25 June',
      degree: 'B.TECH',
      image: 'ms.png',
      link: '/',
    },
    {
      company: 'Google',
      profile: 'Web Developer',
      lastDate: '30 June',
      degree: 'B.S. in Computer Science',
      image: 'google.png',
      link: '/',
    },
    {
        company: 'Adobe',
        profile: 'UI/UX Designer',
        lastDate: '12 August',
        degree: 'M.TECH in CSE',
        image: 'adobe.png',
        link: '/',
      },
      {
        company: 'Spotify',
        profile: 'Database Manager',
        lastDate: '5 July',
        degree: 'B.TECH',
        image: 'spotify.png',
        link: '/',
      },
    // Add more card data as needed
  ];

  return (
    <div className=" mx-1 border z-10" >
      {cardData.map((card, index) => (
        <Card
          key={index}
          company={card.company}
          profile={card.profile}
          lastDate={card.lastDate}
          degree={card.degree}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
