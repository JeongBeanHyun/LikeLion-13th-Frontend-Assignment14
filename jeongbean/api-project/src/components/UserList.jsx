import UserItem from "./UserItem";

function PostList({ users, onUpdate, onDelete }) {
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

export default PostList;
