import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CastList = ({ currentCast }) => {
  return (
    <div className='row'>
      {currentCast.map((singleCast) => (
        <div className='col-md-6 my-2 px-4'>
          <div className='card bg-dark'>
            <div className='card-body'>
              <h4 className='text-warning'>{singleCast.name} </h4>
              <h6 className='text-primary'>
                <span className='text-light'>DOB:&nbsp; </span>
                {singleCast.birthday}
              </h6>
              <h6 className='text-primary'>
                <span className='text-light'>Occupation:&nbsp;</span>
                {singleCast.occupation[0]}
              </h6>
              <h6 className='text-primary'>
                <span className='text-light'>Status:&nbsp; </span>
                {singleCast.status}
              </h6>
            </div>
            <div className='card-footer'>
              <Link to={`/castDetails/${singleCast.char_id}`}>
                <button className='btn btn-success'>
                  {' '}
                  <FontAwesomeIcon icon={faInfoCircle} /> View Character Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastList;
