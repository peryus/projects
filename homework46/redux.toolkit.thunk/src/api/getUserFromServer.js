import axios from "axios";
import { UserAdapter } from "./UserAdapter";

export async function getUserFromServer(userId) {
  const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  return UserAdapter(response.data);
}