import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const fontSize = 13;
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    let drops = [];
    let timerId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.floor(canvas.width / fontSize);
      drops = new Array(cols).fill(1);
    }

    function draw() {
      // Slow fade trail
      ctx.fillStyle = "rgba(10, 25, 47, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0, 212, 255, 0.18)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      timerId = setTimeout(draw, 55); // ~18 fps — gentle, not distracting
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      clearTimeout(timerId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#0a192f",
      }}
    />
  );
}
