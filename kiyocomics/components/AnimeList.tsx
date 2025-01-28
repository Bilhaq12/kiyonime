import React, { useEffect, useState } from 'react';
import { useAnimeStore } from '../utils/api';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';

const AnimeList: React.FC = () => {
  const { animes, fetchAnimes } = useAnimeStore();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12; 

  useEffect(() => {
    fetchAnimes();
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(animes.length / itemsPerPage));
  }, [itemOffset, animes, fetchAnimes]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % animes.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animes
          .slice(itemOffset, itemOffset + itemsPerPage)
          .map((anime) => (
            <Link href={`/anime/${anime.param}`} key={anime.param}>
              <div className="bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={anime.thumbnail} alt={anime.title} className="w-full rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
                  <p className="text-gray-400 text-sm">{anime.upload_time}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center mt-4"
        pageLinkClassName="px-4 py-2 bg-gray-700 rounded-l hover:bg-gray-600 mr-2"
        previousLinkClassName="px-4 py-2 bg-gray-700 rounded-l hover:bg-gray-600 mr-2"
        nextLinkClassName="px-4 py-2 bg-gray-700 rounded-r hover:bg-gray-600"
        activeLinkClassName="bg-blue-500 text-white"
      />
    </>
  );
};

export default AnimeList;