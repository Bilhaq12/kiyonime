import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useMangaStore } from '../../../utils/api';

const MangaReader: React.FC = () => {
  const router = useRouter();
  const { chapterUrl } = router.query;
  const { chapterDetail, fetchChapterDetail } = useMangaStore();

  useEffect(() => {
    if (chapterUrl && Array.isArray(chapterUrl)) {
      const chapterPath = chapterUrl.join('/');
      const fullChapterUrl = `http://api.lopyubibil.site/api/komiku/chapter/${chapterPath}`;
      fetchChapterDetail(fullChapterUrl);
    }
  }, [chapterUrl, fetchChapterDetail]);

  if (!chapterDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      {chapterDetail.data.map((imageUrl, index) => (
        <div key={index} className="mb-4">
          <Image
            src={imageUrl}
            alt={`Manga Page ${index + 1}`}
            width={800}
            height={1200}
          />
        </div>
      ))}
    </div>
  );
};

export default MangaReader;