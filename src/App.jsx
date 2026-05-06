import React from "react";
import { MarqueeDemo } from "./components/ui/marquee-demo";
import { RippleDemo } from "./components/ui/ripple-demo";
import RandomUserCard from "./components/main/RandomUser";

function App() {
  return (
    <>
    <RippleDemo>
      <MarqueeDemo />
    </RippleDemo>
    <RandomUserCard/>
    </>
  );
}

export default App;
