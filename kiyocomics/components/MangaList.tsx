import React, { useEffect, useState } from 'react';
import { useMangaStore } from '../utils/api';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';

const MangaList: React.FC = () => {
  const { mangas, fetchMangas } = useMangaStore();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchMangas();
    const endOffset = itemOffset + itemsPerPage;
    setPageCount(Math.ceil(mangas.length / itemsPerPage));
  }, [itemOffset, mangas, fetchMangas]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % mangas.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mangas
          .slice(itemOffset, itemOffset + itemsPerPage)
          .map((manga) => (
            <Link href={`/manga/${manga.param}`} key={manga.param}>
              <div className="bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300"> {/* Tambahkan styling card */}
                <img src={manga.thumbnail} alt={manga.title} className="w-full rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{manga.title}</h3>
                  <p className="text-gray-400 text-sm">Chapter terbaru: {manga.latest_chapter}</p>
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

export default MangaList;