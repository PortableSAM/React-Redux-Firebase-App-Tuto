import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-titel">Project Titel - {id}</span>
          <p>blablablablablablablabla</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by PSAM</div>
          <div>12.10.2019, 7pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
