import { useEffect, useState, useCallback } from "react";
import { cn } from "../lib/utils";

function RandomJokes() {
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes"
      );

      const result = await res.json();

      const jokesData = result?.data?.data || [];

      setJokes(jokesData);

      const randomNo = Math.floor(
        Math.random() * jokesData.length
      );

      setJoke(jokesData[randomNo]);

    } catch (error) {
      console.error("Failed to fetch joke:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const nextJokes = () => {
    if (!jokes.length) return;

    const randomNo = Math.floor(
      Math.random() * jokes.length
    );

    setJoke(jokes[randomNo]);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f8f8f8] p-10">
      
      {/* Soft Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-yellow-300/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-300/20 blur-[120px]" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 flex flex-col items-center gap-10">
        
        {loading ? (
          <div className="animate-pulse">
            <JokesCard content="Loading a hilarious joke..." />
          </div>
        ) : joke ? (
          <JokesCard content={joke.content} />
        ) : (
          <p className="text-zinc-500">
            No jokes found.
          </p>
        )}

        {/* Button */}
        <button
          onClick={nextJokes}
          disabled={loading}
          className="
            group
            relative
            overflow-hidden
            rounded-full
            border border-zinc-200
            bg-white
            px-7 py-3
            text-sm font-semibold
            text-zinc-800
            shadow-lg shadow-black/5
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
            disabled:opacity-50
          "
        >
          <span className="relative z-10">
            {loading ? "Fetching..." : "Get Another Joke 😂"}
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}

const JokesCard = ({ content }) => {
  return (
    <figure
      className={cn(
        `
          relative
          w-110
          overflow-hidden
          rounded-[32px]
          border border-white
          p-10
          bg-white/80
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          transition-all duration-500
          hover:-translate-y-1
          hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)]
        `
      )}
    >
      {/* Gradient Glow */}
      <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-yellow-200/40 blur-[80px]" />

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-[80px]" />

      {/* Emoji */}
      <div className="relative z-10 text-6xl">
        😂
      </div>

      {/* Joke */}
      <blockquote
        className="
          relative z-10
          mt-8
          text-2xl
          font-semibold
          leading-relaxed
          tracking-tight
          text-zinc-800
        "
      >
        “{content}”
      </blockquote>

      {/* Footer */}
      <div className="relative z-10 mt-10 flex items-center justify-between">
        
        <div>
          <p className="text-xs uppercase tracking-[4px] text-zinc-400">
            Random Joke
          </p>

        
        </div>

        <div className="rounded-full border border-yellow-200 bg-yellow-100 px-4 py-1 text-xs font-semibold text-yellow-700">
          FUNNY
        </div>
      </div>
    </figure>
  );
};

export default RandomJokes;