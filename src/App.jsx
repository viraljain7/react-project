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

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Navbar */}
      <nav
        className="
          sticky top-0 z-50
          flex items-center justify-between
          border-b border-zinc-200
          bg-white/80
          px-8 py-5
          backdrop-blur-xl
        "
      >
        {/* Logo */}
        <h1 className="text-2xl font-black tracking-tight text-zinc-900">
          FreeAPI
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-semibold text-zinc-600">
          <Link to="/" className="transition hover:text-black">
            Home
          </Link>

          <Link to="/users" className="transition hover:text-black">
            Users
          </Link>

          <Link to="/jokes" className="transition hover:text-black">
            Jokes
          </Link>

          <Link to="/cats" className="transition hover:text-black">
            Cats
          </Link>

          <Link to="/meals" className="transition hover:text-black">
            Meals
          </Link>

          <Link to="/products" className="transition hover:text-black">
            Products
          </Link>

          <Link to="/quotes" className="transition hover:text-black">
            Quotes
          </Link>
            <Link to="/youtube" className="transition hover:text-black">
            Youtube
          </Link>
        </div>
      </nav>

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
