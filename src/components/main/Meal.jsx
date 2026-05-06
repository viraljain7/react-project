import { useEffect, useState } from "react";
import {
  Clock3,
  Globe,
  UtensilsCrossed,
  RefreshCw,
  PlayCircle,
} from "lucide-react";

function Meal() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMeal = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://api.freeapi.app/api/v1/public/meals");

      const data = await res.json();

      const meals = data?.data?.data || [];

      const randomMeal = meals[Math.floor(Math.random() * meals.length)];

      setMeal(randomMeal);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7]">
        Loading...
      </div>
    );
  }

  // Ingredients Array
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-8">
      {/* Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-orange-200/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-200/30 blur-[120px]" />

      {/* Main */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[36px]
          bg-white
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[850px] overflow-hidden">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="
                h-full
                w-full
                object-cover
                transition-transform duration-[6000ms]
                hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Refresh */}
            <button
              onClick={fetchMeal}
              disabled={loading}
              className="
                absolute right-6 top-6
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

            {/* Bottom Content */}
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-[5px] text-white/70">
                {meal.strCategory}
              </p>

              <h1 className="mt-3 text-6xl font-black leading-none">
                {meal.strMeal}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
                  {meal.strArea}
                </div>

                {meal.strTags?.split(",").map((tag, i) => (
                  <div
                    key={i}
                    className="
                      rounded-full
                      bg-orange-500/20
                      px-4 py-2
                      text-sm
                      text-orange-100
                      backdrop-blur-xl
                    "
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-10">
            {/* Info */}
            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl bg-zinc-100 px-5 py-4">
                <UtensilsCrossed className="h-5 w-5 text-zinc-700" />

                <p className="mt-3 text-xs uppercase tracking-[3px] text-zinc-500">
                  Category
                </p>

                <h3 className="mt-1 text-lg font-bold text-zinc-900">
                  {meal.strCategory}
                </h3>
              </div>

              <div className="rounded-2xl bg-zinc-100 px-5 py-4">
                <Globe className="h-5 w-5 text-zinc-700" />

                <p className="mt-3 text-xs uppercase tracking-[3px] text-zinc-500">
                  Area
                </p>

                <h3 className="mt-1 text-lg font-bold text-zinc-900">
                  {meal.strArea}
                </h3>
              </div>

              <div className="rounded-2xl bg-zinc-100 px-5 py-4">
                <Clock3 className="h-5 w-5 text-zinc-700" />

                <p className="mt-3 text-xs uppercase tracking-[3px] text-zinc-500">
                  Difficulty
                </p>

                <h3 className="mt-1 text-lg font-bold text-zinc-900">Medium</h3>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mt-10">
              <h2 className="text-3xl font-black text-zinc-900">Ingredients</h2>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {ingredients.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl
                      border border-zinc-100
                      bg-zinc-50
                      p-4
                    "
                  >
                    <p className="text-xs uppercase tracking-[3px] text-zinc-400">
                      {item.measure}
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-zinc-800">
                      {item.ingredient}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h2 className="text-3xl font-black text-zinc-900">
                Instructions
              </h2>

              <p className="mt-6 max-h-[220px] overflow-y-auto pr-3 leading-8 text-zinc-600">
                {meal.strInstructions}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-10 flex items-center justify-between border-t border-zinc-100 pt-8">
              {/* Tags */}
              <div>
                <p className="text-xs uppercase tracking-[4px] text-zinc-400">
                  Recipe Tags
                </p>

                <p className="mt-2 text-sm text-zinc-600">{meal.strTags}</p>
              </div>

              {/* YouTube */}
              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-3
                    rounded-full
                    bg-red-500
                    px-6 py-3
                    text-sm font-semibold
                    text-white
                    transition hover:scale-105
                  "
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch Recipe
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meal;
