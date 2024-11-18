import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const Particle: React.FC<{ direction: string, isTransitioning: boolean }> = ({ direction, isTransitioning  }) => {
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
                value: isTransitioning ? 300 : 200, // Mais partículas durante a transição
                density: {
                  enable: true,
                },
              },
              color: {
                value: "#FFFFFF", // Cor das estrelas
              },
              move: {
                enable: true,
                speed: isTransitioning ? 30 : 1, // Aumenta a velocidade na transição
                direction: direction, // Direção das partículas
                random: false,
                straight: true, // Movimento reto para simular velocidade
              },
              size: {
                value: isTransitioning ? 2 : 1, // Partículas maiores durante a transição
              },
              opacity: {
                value: 0.5,
              },
              trail: {
                enable: true,
                length: 100, // Comprimento do rastro
                fillColor: "#FFF", // Fundo do rastro
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
              color: "#000000", // Fundo preto para o universo
            },
          }}
        />
      )}
    </>
  );
};

export default Particle;
