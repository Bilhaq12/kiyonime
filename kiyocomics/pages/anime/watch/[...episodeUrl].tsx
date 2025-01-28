import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';
import { useAnimeStore } from '../../../utils/api';

const AnimeWatch: React.FC = () => {
  const router = useRouter();
  const { episodeUrl } = router.query;
  const { episodeDetail, fetchEpisodeDetail } = useAnimeStore();

  useEffect(() => {
    if (episodeUrl && Array.isArray(episodeUrl)) {
      const episodePath = episodeUrl.join('~'); // Bergabung menggunakan '~'
      const fullEpisodeUrl = `http://api.lopyubibil.site/api/anoboy/${episodePath}~`;
      fetchEpisodeDetail(fullEpisodeUrl);
    }
  }, [episodeUrl, fetchEpisodeDetail]);

  if (!episodeDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ReactPlayer
        url={episodeDetail.url}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default AnimeWatch;