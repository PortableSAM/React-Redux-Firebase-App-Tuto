import React from "react";

const projectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted by PSAM</p>
        <p className="grey-text">12.10.2019, 7pm</p>
      </div>
    </div>
  );
};

export default projectSummary;
