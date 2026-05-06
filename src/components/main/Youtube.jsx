import { useEffect, useState } from "react";
import {
  Play,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos"
      );

      const data = await res.json();

      setVideos(data?.data?.data || []);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-20">
      
      {/* Header */}
      <div className="mx-auto max-w-7xl">
        
    

        {/* Grid */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {videos.map((video, index) => {
            const item = video.items;

            return (
              <a
                key={index}
                href={`https://youtube.com/watch?v=${item.id}`}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  border border-zinc-200
                  bg-white
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                "
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  
                  <img
                    src={
                      item.snippet.thumbnails.high.url
                    }
                    alt={item.snippet.title}
                    className="
                      h-[240px]
                      w-full
                      object-cover
                      transition-all duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/10
                    "
                  />

                  {/* Play */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-16
                      w-16
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      backdrop-blur-xl
                      transition-all duration-300
                      group-hover:scale-110
                    "
                  >
                    <Play
                      className="
                        h-7
                        w-7
                        fill-black
                        text-black
                      "
                    />
                  </div>

                  {/* Duration */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      rounded-lg
                      bg-black/80
                      px-3 py-1
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    {item.contentDetails.duration
                      .replace("PT", "")
                      .replace("H", "h ")
                      .replace("M", "m ")
                      .replace("S", "s")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  
                  {/* Channel */}
                  <p
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-zinc-400
                    "
                  >
                    {item.snippet.channelTitle}
                  </p>

                  {/* Title */}
                  <h2
                    className="
                      mt-4
                      line-clamp-2
                      text-2xl
                      font-black
                      leading-tight
                      tracking-tight
                      text-zinc-900
                    "
                  >
                    {item.snippet.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      mt-4
                      line-clamp-3
                      text-sm
                      leading-7
                      text-zinc-500
                    "
                  >
                    {item.snippet.description}
                  </p>

                  {/* Stats */}
                  <div
                    className="
                      mt-8
                      flex
                      items-center
                      gap-5
                      border-t border-zinc-100
                      pt-5
                    "
                  >
                    <div className="flex items-center gap-2">
                      
                      <Eye className="h-4 w-4 text-zinc-400" />

                      <span className="text-sm text-zinc-500">
                        {item.statistics.viewCount}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      
                      <Heart className="h-4 w-4 text-zinc-400" />

                      <span className="text-sm text-zinc-500">
                        {item.statistics.likeCount}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      
                      <MessageCircle className="h-4 w-4 text-zinc-400" />

                      <span className="text-sm text-zinc-500">
                        {item.statistics.commentCount}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <p className="text-zinc-500">
              Loading videos...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Youtube;