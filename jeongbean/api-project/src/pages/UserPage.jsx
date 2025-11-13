import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function PostPage() {
  const [users, setUsers] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, [API_URL]);

  const addUser = (newUser) => {
    axios
      .post(`${API_URL}/users`, newUser)
      .then((res) => setUsers((prev) => [res.data, ...prev]));
  };

  const updateUser = (updateUser) => {
    axios
      .patch(`${API_URL}/users/${updateUser.id}`, updateUser)
      .then((res) =>
        setUsers((prev) =>
          prev.map((p) => (p.id === updateUser.id ? res.data : p))
        )
      );
  };

  const deleteUser = (id) => {
    axios
      .delete(`${API_URL}/users/${id}`)
      .then(() => setUsers((prev) => prev.filter((p) => p.id !== id)));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "55px", marginTop: "70px" }}>
        유저 프로필 관리
      </h1>
      <UserForm onAdd={addUser} />
      <UserList users={users} onUpdate={updateUser} onDelete={deleteUser} />
    </div>
  );
}

export default PostPage;
