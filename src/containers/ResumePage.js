import React from "react";
import Resume from "../assets/resume/resume.pdf";

const ResumePage = () => {
  return (
    <div style={{ margin: "0px", padding: "0px", overflow: "hidden" }}>
      <iframe
        src={Resume}
        // frameborder="0"
        // style="overflow:hidden;height:150%;width:150%"
        title="f"
        style={{ margin: "auto" }}
        height="1200px"
        width="1024px"
      ></iframe>
    </div>
  );
};

export default ResumePage;
