import { useState } from "react";

function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-box"
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="add-btn">
          추가
        </button>
      </form>
    </div>
  );
}

export default UserForm;
