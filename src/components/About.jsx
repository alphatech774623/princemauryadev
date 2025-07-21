import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-warning-subtle pt-5" id="about">
        <div className="row">
          <div className="col-5 d-flex justify-content-center align-items-center h-auto">
            <img src="aboutPic.png" alt="" className="img-fluid w-75" />
          </div>
          <div className="col-6">
            <h2 style={{fontSize: "3vmax"}}>About Me</h2>
            <p style={{fontSize : "2.5vmin"}}>
              My name is Prince Maurya, I am a diploma student with CSE
              background at Government Polytechnic Roorkee Baheri Bareilly.
            </p>
            <table style={{fontSize: "2.5vmin"}} className="table table-warning" >
                <tbody>
                <tr >
                    <th>Name:</th>
                    <td>Prince Maurya</td>
                </tr>
                <tr>
                    <th>Date Of Birth:</th>
                    <td>13/02/200</td>
                </tr>
                <tr>
                    <th>Address:</th>
                    <td>Mau Uttarpradesh</td>
                </tr>
                <tr>
                    <th>Pincode:</th>
                    <td>221705</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>princemaurya529@gmail.com</td>
                </tr>
                <tr>
                    <th>Mobile No:</th>
                    <td>8840039506</td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
