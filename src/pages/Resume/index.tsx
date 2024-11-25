import React from "react";
import { Button, Row } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/resume.pdf";
import imageResume from "../../assets/resume.jpg";
import * as Styled from "./styles";

const ResumeNew: React.FC = () => {
  return (
    <Styled.Container>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Button type="primary" href={pdf} target="_blank" style={{ maxWidth: "300px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row justify="center" className="resume">
        <img src={imageResume} alt="Resume" style={{ maxWidth: "66%", height: "auto" }} />
      </Row>

      <Row justify="center" style={{ marginTop: "20px" }}>
        <Button type="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Styled.Container>
  );
};

export default ResumeNew;
