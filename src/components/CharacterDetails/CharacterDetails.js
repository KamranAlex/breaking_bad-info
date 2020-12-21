import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    const baseURL = 'https://www.breakingbadapi.com/api/characters';
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setCastInfo(data));
  }, []);
  const findDetails = castInfo.find((castData) => id === castData.char_id);
  console.log(findDetails);
  return (
    <div className='container bg-dark'>
      <div className='row'>
        <div className='col-md-4'></div>
      </div>
    </div>
  );
};

export default CharacterDetails;
