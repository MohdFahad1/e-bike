import React from 'react';
import './Card.css';
import avatar1 from '../../Assets/avatar1.png';
import avatar2 from '../../Assets/avatar2.png';
import avatar3 from '../../Assets/avatar3.png';
import avatar4 from '../../Assets/avatar4.png';

const Card = () => {
  const data = [
    {
      id: 1,
      Name: "John Doe",
      post: "Founder and CEO",
      image: avatar1,
    },
    {
      id: 2,
      Name: "Martha Chase",
      post: "Co-Founder",
      image: avatar2,
    },
    {
      id: 3,
      Name: "Angela Smith",
      post: "Co-Founder & CTO",
      image: avatar3,
    },
    {
      id: 4,
      Name: "Justin Miller",
      post: "Co-Founder & COO",
      image: avatar4,
    },
  ];

  return (
    <>
      {data.map(({ id, Name, post, image }) => (
        <div key={id}>
          <div className='card'>
          <div>
            <img src={image} alt="images"/>
          </div>
          <div>
            <h1>{Name}</h1>
            <h4>{post}</h4>
          </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
