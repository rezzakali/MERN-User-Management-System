import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();

  // set the user value
  let name, value;
  const changeHandler = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  // post a user
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = user;

    if (name && email && phone) {
      axios
        .post('http://localhost:3001/user/', {
          name,
          email,
          phone,
        })
        .then(() => {})
        .catch((err) => {
          console.log(err.message);
        });
      setTimeout(() => {
        navigate('/all');
        setUser({
          name: '',
          email: '',
          phone: '',
        });
      }, 500);
    } else {
      alert('Every field required!');
    }
  };

  return (
    <form
      action="http://localhost:3000/"
      method="POST"
      className="border p-3 mt-5"
    >
      <div className="mb-3 mt-2">
        <label htmlFor="" className="form-label">
          Full Name
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          placeholder="Your full name"
          onChange={changeHandler}
          value={user.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="name@example.com"
          onChange={changeHandler}
          value={user.email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          name="phone"
          placeholder="+91"
          onChange={changeHandler}
          value={user.phone}
        />
      </div>
      <button
        type="button"
        className="form-control btn btn-success mb-3"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default AddUser;
