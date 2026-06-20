import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../api/api";
import "./ManageUsers.css";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users/");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
        alert("Failed to load users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1>Manage Users</h1>

        <table border="1" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ManageUsers;