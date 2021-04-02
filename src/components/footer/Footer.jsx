import React from "react";
import githubLogo from "../../images/logos/github.png";
import linkedinLogo from "../../images/logos/linkedin.png";
import "./footer.scoped.scss";

export default () => {
  return (
    <div className="footer">
      <a target="_blank" href="https://www.github.com/lowell1">
        <img src={githubLogo} alt="github" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/lowell-jacobs">
        <img src={linkedinLogo} alt="linkedin" />
      </a>
    </div>
  );
};
