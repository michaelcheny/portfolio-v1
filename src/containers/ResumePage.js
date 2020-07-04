import React from "react";
import Resume from "../assets/resume/resume_michael_y_chen.pdf";

const ResumePage = () => {
  return (
    <div style={{ margin: "0px", padding: "0px" }}>
      <iframe
        src={Resume}
        // frameborder="0"
        // style="overflow:hidden;height:150%;width:150%"
        title="f"
        style={{ margin: "auto" }}
        height="1200px"
        width="1024px"
      >
        sdfjhsd
      </iframe>
    </div>
  );
};

export default ResumePage;
