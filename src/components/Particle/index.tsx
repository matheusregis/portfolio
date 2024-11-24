import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

type DirectionType =
  | "none"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "left"
  | "right"
  | "top"
  | "topLeft"
  | "topRight"
  | "outside"
  | "inside";

interface ParticleProps {
  direction?: DirectionType | number | undefined;
  isTransitioning: boolean
}

const Particle = ({ direction = "none", isTransitioning }: ParticleProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: isTransitioning ? 300 : 200, 
                density: {
                  enable: true,
                },
              },
              color: {
                value: "#FFFFFF", 
              },
              move: {
                enable: true,
                speed: isTransitioning ? 30 : 1, 
                direction: direction, 
                random: false,
                straight: true, 
              },
              size: {
                value: isTransitioning ? 2 : 1, 
              },
              opacity: {
                value: 0.5,
              },
              trail: {
                enable: true,
                length: 100, 
                fillColor: "#FFF", 
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: false,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "#000000", 
            },
          }}
        />
      )}
    </>
  );
};

export default Particle;
