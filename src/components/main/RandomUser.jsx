import {
  MapPin,
  Globe,
  Mail,
  RefreshCw,
} from "lucide-react";

import { useEffect, useState } from "react";

function RandomUser() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/randomusers?limit=20"
      );

      const data = await res.json();

      setUser(data?.data?.data || []);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-[#f5f5f7]
        px-8
        py-16
      "
    >
      {/* Header */}
      <div
        className="
          mx-auto
          mb-14
          flex
          max-w-7xl
          items-center
          justify-between
        "
      >
        <div>
          <h1
            className="
              text-6xl
              font-black
              tracking-tight
              text-zinc-900
            "
          >
            Discover
            <br />
            People.
          </h1>

          <p className="mt-4 text-lg text-zinc-500">
            Beautiful modern profile showcase cards.
          </p>
        </div>

        <button
          onClick={fetchUser}
          disabled={loading}
          className="
            flex items-center gap-3
            rounded-2xl
            bg-white
            px-6 py-4
            text-sm font-semibold
            text-zinc-800
            shadow-lg shadow-black/5
            transition-all
            hover:scale-105
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
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {user?.slice(0, 6).map((eachuser) => (
          <div
            key={eachuser.login.uuid}
            className="
              group
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-[0_10px_50px_rgba(0,0,0,0.06)]
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)]
            "
          >
            {/* Image */}
            <div className="relative h-[320px] overflow-hidden">
              
              <img
                src={eachuser.picture.large}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                  transition-all duration-[4000ms]
                  group-hover:scale-110
                "
              />

              {/* Floating Badge */}
              <div
                className="
                  absolute left-5 top-5
                  rounded-full
                  bg-white/90
                  px-4 py-2
                  text-xs font-bold
                  uppercase tracking-[3px]
                  text-zinc-800
                  backdrop-blur-xl
                "
              >
                {eachuser.nat}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              
              {/* Gender */}
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-zinc-400
                "
              >
                {eachuser.gender}
              </p>

              {/* Name */}
              <h1
                className="
                  mt-3
                  text-4xl
                  font-black
                  leading-none
                  tracking-tight
                  text-zinc-900
                "
              >
                {eachuser.name.first}
                <br />

                <span className="text-zinc-500">
                  {eachuser.name.last}
                </span>
              </h1>

              {/* Info */}
              <div className="mt-8 space-y-4">
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-zinc-400" />

                  <p className="text-sm text-zinc-600">
                    {eachuser.location.city},{" "}
                    {eachuser.location.country}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-zinc-400" />

                  <p className="text-sm text-zinc-600">
                    @{eachuser.login.username}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-zinc-400" />

                  <p className="truncate text-sm text-zinc-600">
                    {eachuser.email}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-between
                  border-t border-zinc-100
                  pt-6
                "
              >
                {/* Social */}
                <div className="flex items-center gap-4">
                  
                  <i className="fa fa-instagram text-zinc-400 transition hover:text-pink-500 cursor-pointer"></i>

                  <i className="fa fa-twitter text-zinc-400 transition hover:text-sky-500 cursor-pointer"></i>

                  <i className="fa fa-facebook text-zinc-400 transition hover:text-blue-600 cursor-pointer"></i>
                </div>

                {/* Button */}
                <button
                  className="
                    rounded-full
                    bg-zinc-900
                    px-5 py-2.5
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-white
                    transition-all
                    hover:scale-105
                  "
                >
                  Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty */}
      {!loading && user.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-zinc-500">
            No users found.
          </p>
        </div>
      )}
    </div>
  );
}

export default RandomUser;