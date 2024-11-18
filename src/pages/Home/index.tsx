import Particle from "../../components/Particle";
import { Container, ColAntd, RowAntd, BounceButton } from "./styles";
import RoundedImage from "../../components/RoundedImage";
import { Trans, useTranslation } from "react-i18next";
import Type from "../../components/Type";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleButtonClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsExpanded(!isExpanded);
      setIsTransitioning(false);
    }, 3000); 
  };

  const values =
    i18n.language === "en"
      ? {
          tech: "JavaScript, React.js, Node.js, and AWS",
          webTechnologies: "web technologies",
          blockchain: "blockchain solutions",
          products: "scalable digital products",
        }
      : {
          tech: "JavaScript, React.js, Node.js e AWS",
          webTechnologies: "tecnologias web",
          blockchain: "blockchain",
          products: "produtos digitais escaláveis",
        };

  return (
    <Container>
      <Particle direction={isExpanded ? "bottom" : "top"} isTransitioning={isTransitioning} />
      <RowAntd style={{ width: "100%", display: "flex", alignItems: "center" }}>
        <ColAntd span={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          {!isExpanded ? (
            <>
              <h1>{t("hello")}</h1>
              <h1>
                {t("i am")}
                <strong> MATHEUS RÉGIS</strong>
              </h1>
              <h1><Type /></h1>
            </>
          ) : (
            <>
              <h1>{t("introduce")}</h1>
              <p>
                <Trans
                  i18nKey="aboutme"
                  values={values}
                  components={{
                    strong: <strong style={{ fontWeight: 'bold', color: "#cd5ff8" }} />,
                    span: <span style={{ fontWeight: 'bold', color: "#cd5ff8" }} />,
                  }}
                />
              </p>
            </>
          )}
        </ColAntd>

        <ColAntd span={12} style={{ display: "flex", justifyContent: "center" }}>
          <RoundedImage
            src={!isExpanded ? "src/assets/matheus.jpg" : "src/assets/matheus-cartoon.jpg"}
            width={400}
            height={400}
            alt={!isExpanded ? "Matheus" : "Matheus Cartoon"}
          />
        </ColAntd>
      </RowAntd>
      <RowAntd>
        <ColAntd style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
          <BounceButton isExpanded={isExpanded} onClick={handleButtonClick}>
            {isExpanded ? <FaArrowUp /> : <FaArrowDown />}
          </BounceButton>
        </ColAntd>
       
      </RowAntd>
    </Container>
  );
};

export default Home;
