import React, {useRef} from "react";
import { Ticker1, Ticker2 } from "./Tickers";

const TechStack = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 py-10 bg-background" id="tech-stack min-h-screen">
        <h2 className="pt-10 text-3xl tracking-normal text-center md:px-10 text-text font-body ">
          Technologies I ❤️ to use on the regular
        </h2>
        <Ticker1 />
        <Ticker2 />
      </div>
    </>
  );
};

export default TechStack;
