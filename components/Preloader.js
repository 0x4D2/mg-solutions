import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 1000);
    const completeTimer = setTimeout(() => onComplete(), 2200); // Callback nach Fertigstellung

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`preloader ${fadeOut ? "fadeout" : ""}`}>
      <div className={`lock-animation ${fadeOut ? "fadeout-animation" : ""}`}>
        <div className="lock-shackle"></div>
        <div className="lock-body">
          <div className="lock-hole"></div>
        </div>
      </div>
    </div>
  );
}