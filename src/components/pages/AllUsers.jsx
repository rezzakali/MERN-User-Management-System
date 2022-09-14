import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllUsers() {
  const [users, setUsers] = useState([]);

  // fetch user from the database
  const fetchData = async () => {
    const users = await axios.get('http://localhost:3001/user');
    setUsers(users.data.result);
  };

  // delete a user
  const deleteUser = async (id) => {
    if (window.confirm('Are you sure to delete the user?')) {
      window.location.reload(true);
      await axios.delete(`http://localhost:3001/user/${id}`);
    }
  };

  // update a user
  // const updateUser = async (id) => {
  //   console.log(id);
  // };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table className="table mt-5 table-striped">
        <thead>
          <tr className="bg-primary text-white">
            <th scope="col">_Id</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <th scope="row">{user._id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to={`/edit/${user._id}`}>
                  <button type="button" className="btn btn-primary">
                    Edit
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
