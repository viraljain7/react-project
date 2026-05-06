import React from "react";

import { Routes, Route, Link } from "react-router";

import RandomUserCard from "./components/main/RandomUser";
import RandomJokes from "./components/main/RandomJokes";
import RandomCat from "./components/main/RandomCat";
import Meal from "./components/main/Meal";
import Product from "./components/main/Product";
import Quotes from "./components/main/Quotes";
import "./App.css";
import { Ripple } from "./components/ui/ripple";
import Youtube from "./components/main/Youtube";
import Navbar from "./components/main/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Navbar */}
      <Navbar/>

      {/* Routes */}

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              {/* Background */}
              <div className="absolute inset-0 opacity-[0.02]">
                <Ripple />
              </div>

              {/* Main */}
              <div
                className="
        relative z-10
        mx-auto
        max-w-5xl
        px-6
        py-6
      "
              >
                <div
                  className="
          mt-16
          grid
          gap-px
          overflow-hidden
          rounded-[32px]
          border border-zinc-200
          bg-zinc-200
          md:grid-cols-2
          lg:grid-cols-3
        "
                >
                  {[
                    "Users",
                    "Jokes",
                    "Cats",
                    "Meals",
                    "Products",
                    "Quotes",
                          "Youtube",
                    
                  ].map((item) => (
                    <Link
                      key={item}
                      to={`/${item.toLowerCase()}`}
                      className="
              group
              bg-white
              p-10
              transition-all duration-300
              hover:bg-zinc-50
            "
                    >
                      {/* Number */}
                      <p
                        className="
                text-sm
                font-medium
                text-zinc-400
              "
                      >
                        0
                        {[
                          "Users",
                          "Jokes",
                          "Cats",
                          "Meals",
                          "Products",
                            "Quotes",
                          "Youtube",
                        ].indexOf(item) + 1}
                      </p>

                      {/* Title */}
                      <h2
                        className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-zinc-900
              "
                      >
                        {item}
                      </h2>

                      {/* Desc */}
                      <p
                        className="
                mt-4
                text-sm
                leading-7
                text-zinc-500
              "
                      >
                        Explore modern {item.toLowerCase()} UI experiences.
                      </p>

                      {/* Bottom */}
                      <div
                        className="
                mt-10
                flex
                items-center
                justify-between
              "
                      >
                        <span
                          className="
                  text-sm
                  font-semibold
                  text-zinc-900
                "
                        >
                          Open
                        </span>

                        <div
                          className="
                  text-zinc-400
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:text-zinc-900
                "
                        >
                          →
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          }
        />

        {/* Pages */}
        <Route path="/users" element={<RandomUserCard />} />

        <Route path="/jokes" element={<RandomJokes />} />

        <Route path="/cats" element={<RandomCat />} />

        <Route path="/meals" element={<Meal />} />

        <Route path="/products" element={<Product />} />

        <Route path="/quotes" element={<Quotes />} />
        <Route path="/youtube" element={<Youtube />} />

      </Routes>
    </div>
  );
}

export default App;
