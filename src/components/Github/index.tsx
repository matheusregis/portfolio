import GitHubCalendar from "react-github-calendar";
import { CalendarWrapper, Title } from "./styles";
import { t } from "i18next";

const Github = () => {

  return (
    <CalendarWrapper>
      <Title>
      {t("code")}
      </Title>
      <GitHubCalendar
        username="matheusregis"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
      />
    </CalendarWrapper>
  );
};

export default Github;
