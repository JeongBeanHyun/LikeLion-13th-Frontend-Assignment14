import UserItem from "./UserItem";

function UserList({ users, onUpdate, onDelete }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default UserList;
