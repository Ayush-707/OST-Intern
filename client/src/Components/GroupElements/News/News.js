import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
  return (
    <>
    <Link to={props.link}>
      {/* <div className="card bg-gray-200 rounded-lg overflow-hidden shadow-md flex mt-2 mx-1 hover:bg-gray-300" style={{ width: '512px' }}> */}
      <div className="card bg-gray-200 rounded-lg overflow-hidden shadow-md flex mt-2 mx-1 hover:bg-gray-300 w-full">

        <img
          src={props.image}
          alt=""
          className="icon w-1/3 object-contain mx-1 z-0"
        />
        <div className="p-4">
          <h3 className="text-sm font-semibold mb-2">{props.title}</h3>
          <h3 className="text-sm font-normal mb-2">{props.category}</h3>
          <h3 className="text-sm font-semibold mb-2">Date: <span className="font-normal">{props.date}</span></h3>
          <h3 className="text-sm font-semibold mb-2"><span className="font-normal">{props.content}</span></h3>
        </div>
      </div>
    </Link>
    {/* <style>
    {`
      .card:hover .icon {
        animation: rotate 2s infinite linear;
      }

      @keyframes rotate {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }
    `}
  </style> */}
  </>
  );
};

export default NewsCard;
