import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAnimeStore } from '../../utils/api';

const AnimeDetail: React.FC = () => {
  const router = useRouter();
  const { param } = router.query;
  const { animeDetail, fetchAnimeDetail } = useAnimeStore();

  useEffect(() => {
    if (typeof param === 'string') {
      fetchAnimeDetail(param);
    }
  }, [param, fetchAnimeDetail]);

  if (!animeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{animeDetail.name}</h1>
      <img src={animeDetail.thumbnail} alt={animeDetail.name} className="w-full" />
      <p>{animeDetail.synopsis}</p>
      <h2>Daftar Episode:</h2>
      <ul>
        {animeDetail.episode_navigation.map((episode) => (
          <li key={episode.nav_link}>
            <Link href={episode.nav_link}>
              {episode.nav_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeDetail;