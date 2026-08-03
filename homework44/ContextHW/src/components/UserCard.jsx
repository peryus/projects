import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function UserCard() {
  const { user, loading, error } = useContext(AppContext);

  if (loading) {
    return <p>Loading user...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
      <article className="user-card">
        <h3>{user.name}</h3>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>City:</strong> {user.city}
        </p>

        <p>
          <strong>Company:</strong> {user.company}
        </p>
      </article>
  );
}

export default UserCard;