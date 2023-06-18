import React from 'react';
import NewsCard from './News';

const CardList = () => {
    const newsFeedData = [
        {
          title: "New AI Algorithm Achieves Breakthrough in Speech Recognition",
          category: "Artificial Intelligence",
          date: "2023-06-15",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "ai.jpg",
          link: '/',
        },
        {
          title: "Apple Unveils Latest iPhone Model with Advanced Features",
          category: "Mobile Technology",
          date: "2023-06-14",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "iphone.jpeg",
          link: '/',
        },
        {
          title: "Google Launches New Cloud Computing Service",
          category: "Cloud Computing",
          date: "2023-06-13",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "cloud.webp",
          link: '/',
        },
        {
          title: "Microsoft Announces Partnership with SpaceX for Satellite Internet",
          category: "Technology",
          date: "2023-06-12",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "satellite.jpg",
          link: '/',
        },
        {
          title: "Facebook Introduces Augmented Reality Glasses",
          category: "Social Media",
          date: "2023-06-11",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "fb.png",
          link: '/',
        },
        // Add more news feed items as needed
      ];
      
  return (
    <div className=" mx-1 border z-10">
      {newsFeedData.map((card, index) => (
        <NewsCard
          key={index}
          title={card.title}
          category={card.category}
          date={card.date}
          content={card.content}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardList;
