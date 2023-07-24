import React from "react";

export default function useWindowSize() {

  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1090 : window.innerWidth,
    height: isSSR ? 670 : window.innerHeight,
  });

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });
    };
  }, []);
  return windowSize;
}