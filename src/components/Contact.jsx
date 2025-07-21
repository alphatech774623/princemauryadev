import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log([
        Name,
        email,
        message
    ])
  };
  return (
    <>
      <div className="container-fluid bg-danger-subtle pt-5 pb-5" id="contact">
            <h2 className='text-center' style={{fontSize : "3vmax"}}>Contact Me</h2>
            <p className="text-center" style={{fontSize : "2.5vmin"}}>
                Feel Free to Contact Me!
            </p>
             <form onSubmit={handleSubmit} className='container'>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label text-dark fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label text-dark fw-bold">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="@examplegmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              placeholder="Enter Your Message Here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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
