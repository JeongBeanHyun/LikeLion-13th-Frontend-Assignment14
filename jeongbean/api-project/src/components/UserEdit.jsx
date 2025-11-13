import { useState } from "react";

function UserEdit({ name, onUpdate, onCancel }) {
  const [editName, setEditName] = useState(name);

  const handleSave = (e) => {
    e.preventDefault();
    if (!editName.trim()) return;
    onUpdate(editName);
  };

  return (
    <form className="user-edit" onSubmit={handleSave}>
      <p className="edit-title">닉네임 수정</p>
      <input
        className="edit-input"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <div className="edit-btn">
        <button className="btn" type="submit">
          저장
        </button>
        <button className="btn" type="button" onClick={onCancel}>
          취소
        </button>
      </div>
    </form>
  );
}

export default UserEdit;
