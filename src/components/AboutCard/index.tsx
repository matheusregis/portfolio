import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

import {
  StyledCard,
  Paragraph,
  ListItem,
  QuoteText,
  FooterText,
  AboutWrapper,
  StyledTitle,
  TitleWrapper,
} from "./styles";

const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <TitleWrapper>
        <StyledTitle>
          {t("who")} <span>{t("i'm")}</span>
        </StyledTitle>
      </TitleWrapper>

      <StyledCard bordered={false}>
        <Paragraph>
          {t("hi")} <span>Matheus Felipe Regis</span> {t("from")}{" "}
          <span>Atlanta, Georgia, USA, </span> {t("originally")} 
          <span>Fraiburgo, Santa Catarina, Brazil.</span>
          <br />
          {t("work")}
          <br />
          {t("freelance")}
          <br />
          {t("graduation")}
          <br />
          <br />
          {t("someActivities")}
        </Paragraph>

        <ul>
          <ListItem>
            <ImPointRight /> {t("games")}
          </ListItem>
          <ListItem>
            <ImPointRight /> {t("talk")}
          </ListItem>
          <ListItem>
            <ImPointRight /> {t("brewer")}
          </ListItem>
        </ul>

        <QuoteText>
          "{t("phrase")}"
        </QuoteText>

        <FooterText>Regis, Matheus</FooterText>
      </StyledCard>
    </AboutWrapper>
  );
};

export default AboutCard;
