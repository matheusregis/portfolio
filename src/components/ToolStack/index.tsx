import ReactIcons from "react-icons/si";

import { GridWrapper, IconCard, IconLabel } from "./styles";

const Toolstack = () => {
  const tools = [
    { icon: <ReactIcons.SiVisualstudiocode />, name: "VS Code" },
    { icon: <ReactIcons.SiPostman />, name: "Postman" },
    { icon: <ReactIcons.SiSlack />, name: "Slack" },
    { icon: <ReactIcons.SiVercel />, name: "Vercel" },
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
