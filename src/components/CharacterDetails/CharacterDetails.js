import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterQuotes from "./CharacterQuotes";

const CharacterDetails = () => {
  const { char_id } = useParams();
  const [castInfo, setCastInfo] = useState({});
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters/${char_id}`)
      .then((res) => res.json())
      .then((data) => setCastInfo(data[0]));
  }, [char_id]);

  //Format name to get Character Quotes
  if (typeof castInfo.name === "string") {
    var name = castInfo.name;
    var nameForParam = name.split(" ").join("+");
  }

  return (
    <div>
      <div className='container bg-dark mt-4' style={{ height: "540px" }}>
        <div className='row py-4'>
          <div className='col-md-6'>
            <img
              src={castInfo.img}
              alt=''
              className='img-fluid'
              style={{ height: "490px" }}
            />
          </div>
          <div className='col-md-6'>
            <h1 className='text-success mb-2'>Character Details:</h1>
            <h4 className='text-light m-3'>
              Name: <span className='text-warning'>{castInfo.name}</span>
            </h4>
            <h4 className='text-light m-3'>
              Nickname:{" "}
              <span className='text-warning'>
                {" "}
                <i>{castInfo.nickname} </i>
              </span>
            </h4>
            <h4 className='text-light m-3'>
              D.O.B: <span className='text-warning'>{castInfo.birthday}</span>
            </h4>
            {typeof castInfo.occupation === "object" && (
              <h4 className='text-light m-3'>
                Occupation:{" "}
                <span className='text-warning'>
                  {castInfo.occupation.join("/")}
                </span>
              </h4>
            )}
            <h4 className='text-light m-3'>
              Status: <span className='text-warning'>{castInfo.status}</span>
            </h4>
            <h4 className='text-light m-3'>
              Portrayed-by:{" "}
              <span className='text-warning'>{castInfo.portrayed}</span>
            </h4>
            {typeof castInfo.appearance === "object" && (
              <h4 className='text-light m-3'>
                Seassion:{" "}
                <span className='text-warning'>
                  {castInfo.appearance.join("-")}
                </span>
              </h4>
            )}
          </div>
        </div>
      </div>
      <div className='container'>
        <h3 className='text-center my-3'>
          All Quotes By <span className='text-warning'>{castInfo.name}</span>
        </h3>
        <CharacterQuotes author={nameForParam}></CharacterQuotes>
      </div>
    </div>
  );
};

export default CharacterDetails;
