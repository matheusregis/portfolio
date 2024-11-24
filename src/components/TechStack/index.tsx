import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiNestjs,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { GridWrapper, IconCard, IconLabel } from "./styles";

const Techstack = () => {
  const techIcons = [
    { icon: <CgCPlusPlus />, name: "C++" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <TbBrandGolang />, name: "Go" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiMysql />, name: "MySQL" },
    { icon: <SiNestjs />, name: "NestJS" },
  ];

  return (
    <GridWrapper>
      {techIcons.map((tech, index) => (
        <IconCard key={index}>
          {tech.icon}
          <IconLabel>{tech.name}</IconLabel>
        </IconCard>
      ))}
    </GridWrapper>
  );
};

export default Techstack;
