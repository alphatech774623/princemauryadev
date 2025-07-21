import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "This is My Personal Portfolio Website made with MERN Technology.",
      ImageUrl: "/portfolioScreenShot.png",
    },
    {
      title: "My Blog Website",
      description:
        "This is My Blogging Website made with Wordpress Astra Theme.",
      ImageUrl: "/alphatechdevscreenshot.png",
    },
    {
      title: "To do List App",
      description:
        "This App is simple javaScript Logic Building project made with HTMl, CSS and javaScript.",
      ImageUrl: "/todoappscreenshot.png",
    },
  ];

  return (
    <>
      <div className="container-fluid bg-warning-subtle pt-5 pb-5" id="project">
        <h2 className="mx-auto text-center" style={{ fontSize: "3vmax" }}>
          Projects
        </h2>
        <p className="text-center" style={{ fontSize: "2.5vmin" }}>
          Here are the tools and technologies I work with to build efficient and
          modern web applications.
        </p>
        <div className="d-flex flex-wrap container align-items-center justify-content-center gap-3">
          {projects.map((elem, idx) => {
            return (<div className="card" style={{width: "18rem"}} key={idx}>
              <img src={elem.ImageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{elem.title}</h5>
                <p className="card-text">
                  {elem.description}
                </p>
                <div className="container d-flex justify-content-between">
                    <a href="#" className="btn btn-warning btn-sm ">
                  Live
                </a>
                <a href="#" className="btn btn-danger btn-sm ">
                  Code
                </a>
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
