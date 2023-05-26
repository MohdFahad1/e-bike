import React from 'react';
import './Card.css';
import avatar1 from '../../Assets/avatar1.jpg';
import avatar2 from '../../Assets/avatar2.jpg';
import avatar3 from '../../Assets/avatar3.jpg';
import avatar4 from '../../Assets/avatar4.jpg';

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
      Name: "John Doe",
      post: "Co-Founder",
      image: avatar2,
    },
    {
      id: 3,
      Name: "John Doe",
      post: "Co-Founder & CTO",
      image: avatar3,
    },
    {
      id: 4,
      Name: "John Doe",
      post: "Co-Founder & COO",
      image: avatar4,
    },
  ];

  return (
    <>
      {data.map(({ id, Name, post, image }) => (
        <div key={id}>
          <img src={image} alt="images" />
          <h1>{Name}</h1>
          <h4>{post}</h4>
        </div>
      ))}
    </>
  );
};

export default Card;
