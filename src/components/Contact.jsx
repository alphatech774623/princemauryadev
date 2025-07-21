import React from 'react'
import { useState } from 'react';
import * as Yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';

const Contact = () => {
  // const [Name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log([
  //       Name,
  //       email,
  //       message
  //   ])
  // };

   const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
     toast.success('Form Submitted', {
position: "top-left",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
      console.log("Form Data:", values);
      resetForm();
    },
  });

  return (
    <>
      <div className="container-fluid bg-danger-subtle pt-5 pb-5" id="contact">
          <ToastContainer
position="top-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
            <h2 className='text-center' style={{fontSize : "3vmax"}}>Contact Me</h2>
            <p className="text-center" style={{fontSize : "2.5vmin"}}>
                Feel Free to Contact Me!
            </p>
             <form onSubmit={formik.handleSubmit} className='container'>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label text-dark fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control m-1"
                  id="Name"
                  placeholder="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  name="name"
                
                />
                 {formik.errors.name && <p className='text-danger bg-light d-inline rounded rounded-pill p-2' style={{fontSize : "2vmin"}}>{formik.errors.name}</p>}
            </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label text-dark fw-bold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control m-1"
              id="Email"
              placeholder="@examplegmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              name='email'
            />
             {formik.errors.email && <p className='text-danger bg-light d-inline rounded rounded-pill p-2' style={{fontSize : "2vmin"}}>{formik.errors.email}</p>}
        </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Example textarea
            </label>
            <textarea
              className="form-control m-1"
              id="message"
              rows="3"
              placeholder="Enter Your Message Here"
              value={formik.values.message}
              onChange={formik.handleChange}
              name='message'
            ></textarea>
             {formik.errors.message && <p className='text-danger bg-light d-inline rounded rounded-pill p-2' style={{fontSize : "2vmin"}}>{formik.errors.message}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark rounded-pill">
              Submit →
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
