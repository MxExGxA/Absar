import { useState, useEffect } from "react";

const UseInView = (
  selector: string,
  options?: IntersectionObserverInit
) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [selector, options]);

  return isInView;
};

export default UseInView;
