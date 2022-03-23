import { useRef, useState, useEffect } from "react";

const imageWidth = 320 + 10; // story width + 10 to make up for padding

export function useHorizontalScroll() {
  const [width, setWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);
  const slider = useRef();

  useEffect(() => {
    const setInnerWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", setInnerWidth);
    return () => {
      window.removeEventListener("resize", setInnerWidth);
    };
  });

  useEffect(() => {
    if (width > 1100) return;
    const el = slider.current;
    if (el) {
      const onSlide = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 1.5, // multiply to increase scroll step
          behavior: "smooth",
        });
        setIndexNum();
      };

      const setIndexNum = () => setIndex(Math.ceil(el.scrollLeft / imageWidth));

      el.addEventListener("wheel", onSlide);
      el.addEventListener("touchmove", setIndexNum);
      return () => {
        el.removeEventListener("wheel", onSlide);
        el.removeEventListener("touchmove", setIndexNum);
      };
    }
  }, [width]);

  return { slider, index };
}
