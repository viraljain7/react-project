import { useEffect, useState } from "react";
import { Quote, RefreshCw } from "lucide-react";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes"
      );

      const data = await res.json();

      setQuotes(data?.data?.data || []);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] px-8 py-14">
      
      {/* Header */}
      <div className="mx-auto mb-14 flex max-w-7xl items-center justify-between">
        
        <div>
          <h1 className="text-5xl font-black tracking-tight text-zinc-900">
            Inspiring Quotes
          </h1>

          <p className="mt-3 text-zinc-500">
            Wisdom from the world’s greatest minds.
          </p>
        </div>

        <button
          onClick={fetchQuotes}
          disabled={loading}
          className="
            flex items-center gap-3
            rounded-2xl
            border border-zinc-200
            bg-white
            px-6 py-3
            text-sm font-semibold
            text-zinc-700
            shadow-sm
            transition-all duration-300
            hover:scale-105
            hover:shadow-lg
          "
        >
          <RefreshCw
            className={`h-4 w-4 ${
              loading ? "animate-spin" : ""
            }`}
          />

          Refresh
        </button>
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-white
              p-8
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]
            "
          >
            {/* Glow */}
            <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-cyan-100/40 blur-[80px]" />

            {/* Quote Icon */}
            <div
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-zinc-100
              "
            >
              <Quote className="h-6 w-6 text-zinc-700" />
            </div>

            {/* Content */}
            <blockquote
              className="
                mt-8
                text-2xl
                font-semibold
                leading-10
                tracking-tight
                text-zinc-900
              "
            >
              “{quote.content}”
            </blockquote>

            {/* Footer */}
            <div className="mt-10 border-t border-zinc-100 pt-6">
              
              <p className="text-lg font-bold text-zinc-900">
                {quote.author}
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                @{quote.authorSlug}
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                
                {quote.tags?.map((tag, index) => (
                  <div
                    key={index}
                    className="
                      rounded-full
                      bg-zinc-100
                      px-4 py-2
                      text-xs font-semibold
                      uppercase tracking-[2px]
                      text-zinc-700
                    "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;