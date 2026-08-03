import UserCard from "./UserCard";

function UserSection() {
  return (
      <section className="user-section">
        <h2>User from server</h2>

        <UserCard />
      </section>
  );
}

export default UserSection;