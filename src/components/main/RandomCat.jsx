import { useEffect, useState } from "react";
import { Heart, Globe, Sparkles, Weight, Brain, RefreshCw } from "lucide-react";

function RandomCat() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/cats/cat/random",
      );

      const data = await res.json();

      setCat(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  if (!cat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f6f6] flex items-center justify-center p-8 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-200/40 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-200/40 blur-[120px]" />

      {/* Main Card */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[36px]
          bg-white
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative h-[750px] overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              className="
                h-full
                w-full
                object-cover
                transition-transform duration-[6000ms]
                hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Floating Actions */}
            <div className="absolute right-6 top-6 flex gap-3">
              <button
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-full
                  bg-white/80
                  backdrop-blur-xl
                  transition hover:scale-110
                "
              >
                <Heart className="h-5 w-5 text-pink-500" />
              </button>

              <button
                onClick={fetchCat}
                disabled={loading}
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-full
                  bg-white/80
                  backdrop-blur-xl
                  transition hover:scale-110
                "
              >
                <RefreshCw
                  className={`h-5 w-5 text-zinc-700 ${
                    loading ? "animate-spin" : ""
                  }`}
                />
              </button>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-[5px] text-white/70">
                Cat Breed
              </p>

              <h1 className="mt-3 text-6xl font-black leading-none">
                {cat.name}
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
                {cat.description}
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-zinc-700">
                {cat.origin}
              </div>

              <div className="rounded-full bg-pink-100 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-pink-700">
                {cat.life_span} Years
              </div>

              <div className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-cyan-700">
                {cat.country_code}
              </div>
            </div>

            {/* Temperament */}
            <div className="mt-10">
              <h2 className="text-3xl font-black text-zinc-900">Temperament</h2>

              <p className="mt-5 leading-8 text-zinc-600">{cat.temperament}</p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Weight className="h-5 w-5 text-zinc-700" />

                <p className="mt-4 text-sm text-zinc-500">Weight</p>

                <h3 className="mt-1 text-2xl font-black text-zinc-900">
                  {cat.weight.metric} KG
                </h3>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Brain className="h-5 w-5 text-zinc-700" />

                <p className="mt-4 text-sm text-zinc-500">Intelligence</p>

                <h3 className="mt-1 text-2xl font-black text-zinc-900">
                  {cat.intelligence}/5
                </h3>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Sparkles className="h-5 w-5 text-zinc-700" />

                <p className="mt-4 text-sm text-zinc-500">Energy</p>

                <h3 className="mt-1 text-2xl font-black text-zinc-900">
                  {cat.energy_level}/5
                </h3>
              </div>

              <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-6">
                <Globe className="h-5 w-5 text-zinc-700" />

                <p className="mt-4 text-sm text-zinc-500">Country</p>

                <h3 className="mt-1 text-2xl font-black text-zinc-900">
                  {cat.country_codes}
                </h3>
              </div>
            </div>

            {/* Extra Info */}
            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                  Adaptability
                </p>

                <div className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-zinc-900"
                    style={{
                      width: `${cat.adaptability * 20}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                  Affection Level
                </p>

                <div className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-pink-500"
                    style={{
                      width: `${cat.affection_level * 20}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                  Social Needs
                </p>

                <div className="mt-2 h-3 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{
                      width: `${cat.social_needs * 20}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 flex items-center justify-between border-t border-zinc-100 pt-8">
              <div>
                <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                  Hypoallergenic
                </p>

                <p className="mt-2 text-lg font-semibold text-zinc-700">
                  {cat.hypoallergenic ? "Yes" : "No"}
                </p>
              </div>

              <a
                href={cat.wikipedia_url}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full
                  bg-zinc-900
                  px-6 py-3
                  text-sm font-semibold
                  text-white
                  transition hover:scale-105
                "
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomCat;
