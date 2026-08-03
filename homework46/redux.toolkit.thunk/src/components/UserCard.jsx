import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUser,
  fetchUser,
  selectUser,
  selectUserError,
  selectUserLoading,
  selectUserStatus,
} from "../redux/userSlice";

function UserCard() {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(1);

  const user = useSelector(selectUser);
  const status = useSelector(selectUserStatus);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  function handleLoadUser() {
    dispatch(fetchUser(userId));
  }

  function handleClearUser() {
    dispatch(clearUser());
  }

  return (
      <div>
        <div className="user-controls">
          <label>
            User ID:
            <input
                type="number"
                min="1"
                max="10"
                value={userId}
                onChange={(event) => {
                  setUserId(Number(event.target.value));
                }}
            />
          </label>

          <button
              type="button"
              onClick={handleLoadUser}
              disabled={loading}
          >
            {loading ? "Loading..." : "Load user"}
          </button>

          <button
              type="button"
              onClick={handleClearUser}
              disabled={loading}
          >
            Clear user
          </button>
        </div>

        <p>
          <strong>Request status:</strong> {status}
        </p>

        {loading && <p>Loading user...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && !user && (
            <p>Select an ID and load a user</p>
        )}

        {user && (
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
        )}
      </div>
  );
}

export default UserCard;