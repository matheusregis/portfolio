import Github from "../../components/Github";
import Techstack from "../../components/TechStack";
import Aboutcard from "../../components/AboutCard";
import Toolstack from "../../components/ToolStack";
import laptopImg from "../../assets/about.jpg";

import {
  AboutSection,
  AboutContent,
  TextContainer,
  StyledImage,
  ProjectHeading,
} from "./styles";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>

      <AboutSection>
        <AboutContent>
          <TextContainer>
            <Aboutcard />
          </TextContainer>

          <StyledImage src={laptopImg} alt="about" />
        </AboutContent>
      </AboutSection>

      <div>
        <ProjectHeading>
        {t("professional-skillset")}
        </ProjectHeading>
        <Techstack />
      </div>
      <div>
        <ProjectHeading>
          {t("tools")}
        </ProjectHeading>
        <Toolstack />
      </div>
      <div>
        <Github />
      </div>
    </div>
  );
};

export default About;
