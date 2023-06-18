import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
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
          <h3 className=" text-sm font-semibold  mb-2">Company: <span className="font-normal">{props.company}</span></h3>
          <h3 className="text-sm font-semibold mb-2">Profile: <span className="font-normal">{props.profile}</span></h3>
          <h3 className="text-sm font-semibold mb-2">Last Date To Apply: <span className="font-normal">{props.lastDate}</span></h3>
          <h3 className="text-sm font-semibold mb-2">Min Qualification: <span className="font-normal">{props.degree}</span></h3>
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

export default Card;
