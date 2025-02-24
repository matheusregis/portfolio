import { SiVsco, SiPostman, SiSlack, SiVercel } from "react-icons/si";

import { GridWrapper, IconCard, IconLabel } from "./styles";

const Toolstack = () => {
  const tools = [
    { icon: <SiVsco />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <GridWrapper>
      {tools.map((tool, index) => (
        <IconCard key={index}>
          {tool.icon}
          <IconLabel>{tool.name}</IconLabel>
        </IconCard>
      ))}
    </GridWrapper>
  );
};

export default Toolstack;
