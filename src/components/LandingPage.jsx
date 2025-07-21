import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid" id="home">
        <div className="row bg-danger-subtle">
          <div className="col-md-6 d-flex justify-content-center flex-column px-5 mt-5">
            <h1>
              Hi! I'm <span className="text-danger">Prince Maurya</span>
            </h1>
            <p className="fw-bold">
              Web Developer <span className="text-danger">|</span> MERN STACK{" "}
              <span className="text-danger">|</span> Trainee & Student
            </p>
            <p>
                I’m a passionate web developer crafting clean, user-friendly, and responsive websites with modern technologies.
            </p>
            <div className="btn-container">
                <button type="button" className="btn btn-outline-danger rounded-pill me-4 mb-2">View Projects</button>
                <button type="button" className="btn btn-danger rounded-pill  me-4 mb-2">Downaload CV</button>
            </div>
          </div>
          <div className="col-md-6 p-5 d-flex justify-content-center align-items-center">
            <img
              src="profilePic.png"
              alt=""
              className="w-75 img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
