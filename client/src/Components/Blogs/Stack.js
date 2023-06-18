import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <a href="/" className="group z-10">
      <div className="h-auto rounded-md shadow-md bg-blue-100 flex items-center justify-center transform transition-all duration-300 group-hover:scale-105" style={{width: '20vw'}}>
        <div className="p-4">
        <img
          src={image}
          alt=""
          className="icon w-full h-20 object-cover mx-1"
        />
          <h3 className="text-lg font-semibold mb-2 text-center mt-1">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </div>
      </div>
    </a>
  );
};

const CardGrid = () => {
  return (
    
    <div className='' style={{marginLeft: '32%', marginTop: '4%'}}>
        <div className="grid grid-cols-2 gap-4">
      <Card
        title="How to Design a Resume"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="Blog/1.jpg"
      />
      <Card
        title="Use Files to Your Advantage"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="Blog/2.webp"
      />
      <Card
        title="Setup Your Blog"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="Blog/3.webp"
      />
      <Card
        title="Guide to Google Design"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="Blog/4.gif"
      />
    </div>
    </div>
    
    
  );
};

export default CardGrid;
