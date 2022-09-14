/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

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
        .put(`http://localhost:3001/user/${id}`, {
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

  const fetchData = async () => {
    const users = await axios.get(`http://localhost:3001/user/${id}`);
    setUser(users.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <form action="http://localhost:3000/" method="POST">
        <div className="mb-3 mt-5">
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
          className="form-control btn btn-success"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
