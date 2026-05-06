import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Users",
    "Jokes",
    "Cats",
    "Meals",
    "Products",
    "Quotes",
    "Youtube",
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-zinc-200
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-5
        "
      >
        {/* Logo */}
        <a
          href="https://freeapi.app"
          target="_blank"
          rel="noreferrer"
          className="
            text-2xl
            font-black
            tracking-tight
            text-zinc-900
          "
        >
          FreeAPI
        </a>

        {/* Desktop Nav */}
        <div
          className="
            hidden
            items-center
            gap-6
            text-sm
            font-semibold
            text-zinc-600
            lg:flex
          "
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
                transition
                hover:text-black
                ${
                  isActive
                    ? "text-black"
                    : "text-zinc-500"
                }
              `
            }
          >
            Home
          </NavLink>

          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `
                  transition
                  hover:text-black
                  ${
                    isActive
                      ? "text-black"
                      : "text-zinc-500"
                  }
                `
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-zinc-200
            bg-white
            text-zinc-900
            lg:hidden
          "
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden
          transition-all duration-300
          lg:hidden
          ${
            open
              ? "max-h-[500px] border-t border-zinc-200"
              : "max-h-0"
          }
        `}
      >
        <div
          className="
            flex flex-col
            bg-white
            px-6 py-4
          "
        >
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              rounded-xl
              px-4 py-3
              text-sm
              font-semibold
              text-zinc-700
              transition-all
              hover:bg-zinc-100
            "
          >
            Home
          </Link>

          {navItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-4 py-3
                text-sm
                font-semibold
                text-zinc-700
                transition-all
                hover:bg-zinc-100
              "
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;