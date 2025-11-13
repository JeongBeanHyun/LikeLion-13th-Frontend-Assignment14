import { useState } from "react";
import UserEdit from "./UserEdit";

function UserItem({ user, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (editName) => {
    onUpdate({ ...user, name: editName });
    setIsEditing(false);
  };

  return (
    <div className="user-item">
      {isEditing ? (
        <UserEdit
          name={user.name}
          onUpdate={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button className="btn" onClick={() => setIsEditing(true)}>
            수정
          </button>
          <button className="btn" onClick={() => onDelete(user.id)}>
            삭제
          </button>
        </>
      )}
    </div>
  );
}

export default UserItem;
