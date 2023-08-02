import Script from "next/script";
// import styles from "./LandingPageTemplate.module.css";

const LandingPageTemplate = () => {
  const onConfettiLoad = () => {
    const key = "hasShownConfetti-Big Project by herlambang";
    const hasShownConfetti = localStorage.getItem(key);
    if (hasShownConfetti != null) return;

    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    (function frame() {
      const timeLeft = animationEnd - Date.now();

      (window as any).confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: Math.max(200, 500 * (timeLeft / duration)),
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        shapes: ["square", "circle"],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.1, 0.1),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();

    localStorage.setItem(key, "true");
  };

  return (
    <div >
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js"
        onLoad={onConfettiLoad}
      />
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            line-height: 1.5;
          }
        `}
      </style>
      <main>
        <h1>Apa kabar</h1>
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default LandingPageTemplate;
