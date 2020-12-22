import React, { useEffect, useState } from "react";
import CastList from "./CastList";
import Pagination from "./Pagination";

const Casts = () => {
  const [casts, setCasts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [castsPerPage] = useState(10);
  useEffect(() => {
    const baseURL = "https://www.breakingbadapi.com/api/characters";
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setCasts(data));
  }, []);

  const handleChange = (e) => setSearch(e.target.value);
  const filteredCasts = casts.filter((flCasts) => {
    return (
      flCasts.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    );
  });

  // Get current Character
  const indexOfLastCast = currentPage * castsPerPage;
  const indexOfFirstCast = indexOfLastCast - castsPerPage;
  const currentCast = filteredCasts.slice(indexOfFirstCast, indexOfLastCast);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container '>
      <div className='d-flex justify-content-center mt-3 mb-2'>
        <form className='w-50'>
          <input
            className='form-control'
            type='text'
            placeholder='Search a Character Name...'
            onChange={handleChange}
          />
        </form>
      </div>
      <div className='row'>
        {currentCast.length ? (
          <>
            <CastList currentCast={currentCast}></CastList>
            <Pagination
              castsPerPage={castsPerPage}
              totalCasts={filteredCasts.length}
              paginate={paginate}
            />
          </>
        ) : (
          <h4 className='mx-auto text-danger'>Loading...</h4>
        )}
      </div>
    </div>
  );
};

export default Casts;
