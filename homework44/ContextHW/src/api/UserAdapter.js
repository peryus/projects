export function UserAdapter(user) {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
    city: user.address?.city || "Unknown city",
    company: user.company?.name || "Unknown company",
  };
}