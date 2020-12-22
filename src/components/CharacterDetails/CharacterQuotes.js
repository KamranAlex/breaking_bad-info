import React, { useEffect, useState } from "react";

const CharacterQuotes = ({ author }) => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/quote?author=${author}`)
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, [author]);

  return (
    <div className='row'>
      {quotes.map((singleQuote) => (
        <div className='col-md-3' key={singleQuote.quote_id}>
          <div
            className='card text-white bg-success mb-2'
            style={{ maxWidth: "18rem", height: "220px" }}
          >
            <div className='card-body d-flex justify-content-center align-items-center'>
              <h5 className='card-title'>
                <q>
                  {" "}
                  <i>{singleQuote.quote}</i>{" "}
                </q>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterQuotes;
