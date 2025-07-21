import React from "react";

const Skills = () => {
  return (
    <div className="container-fluid bg-danger-subtle pt-5 pb-5" id="skill">
      <h2 className="mx-auto text-center" style={{ fontSize: "3vmax" }}>
        Skills
      </h2>
      <p className="text-center" style={{ fontSize: "2.5vmin" }}>
        Here are the tools and technologies I work with to build efficient and
        modern web applications.
      </p>
      <div className="skills container" style={{fontSize : "2.5vmin"}}>
        <div className="row">
          <div className="col-md-6">
            <div className="html">
              <p className="mb-0 mt-2">HTML5</p>
              <div
                className="progress mt-0"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "95%"}}>
                  95%
                </div>
              </div>
            </div>
            <div className="css">
              <p className="mb-0 mt-2">CSS (Cascading Style Sheet)</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "85%"}}>
                  85%
                </div>
              </div>
            </div>
            <div className="javaScript">
              <p className="mb-0 mt-2">JavaScript</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "75%"}}>
                  75%
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="MERN">
              <p className="mb-0 mt-2">MERN</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "50%"}}>
                  50%
                </div>
              </div>
            </div>
            <div className="wordpress">
              <p className="mb-0 mt-2">Wordpress</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "60%"}}>
                  60%
                </div>
              </div>
            </div>
            <div className="SQL">
              <p className="mb-0 mt-2">SQL (Structured Query Language)</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar text-bg-warning" style={{width: "70%"}}>
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
