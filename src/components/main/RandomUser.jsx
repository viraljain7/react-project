import "./style.css";

import React from "react";

function RandomUser() {
  return (
    <div class=" flex flex-col space-y-10  lg:flex-row lg:justify-around lg:h-screen items-center bg-background overflow-y-auto">
      {/* <!-- =======card-1===== --> */}
      <div class=" card card0 w-72 h-80 rounded overflow-hidden  bg-black flex justify-center items-center relative">
        <div class="bod h-72 w-64   hover:border hover:border-white transition-all ">
          <h2 class="text-white ml-4 pt-5 text-xl font-semibold ">Al Pacino</h2>
          <div class="icons flex flex-col text-white absolute top-44 space-y-2 ml-4">
            <i class="fa fa-codepen" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-dribbble" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomUser;
