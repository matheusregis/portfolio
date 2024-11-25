import React, { useState, useEffect } from "react";
import { Button, Row } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/resume.pdf";
import * as Styled from "./styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Styled.Container>
      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Button type="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row justify="center" className="resume">
        <Document
          file={pdf}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onLoadError={(error: any) => console.error("Error loading PDF:", error)}
        >
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} canvasBackground="black"  />
        </Document>
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
