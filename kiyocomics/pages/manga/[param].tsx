import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMangaStore } from '../../utils/api';

const MangaDetail: React.FC = () => {
  const router = useRouter();
  const { param } = router.query;
  const { mangaDetail, fetchMangaDetail } = useMangaStore();

  useEffect(() => {
    if (typeof param === 'string') {
      fetchMangaDetail(param);
    }
  }, [param, fetchMangaDetail]);

  if (!mangaDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{mangaDetail.title}</h1>
      <img src={mangaDetail.thumbnail} alt={mangaDetail.title} className="w-full" />
      <p>{mangaDetail.synopsis}</p>
      <ul>
        {mangaDetail.chapters.map((chapter) => (
          <li key={chapter.detail_url}>
            <Link href={chapter.detail_url}>
              {chapter.chapter}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MangaDetail;