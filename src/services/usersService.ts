import axios from "axios";
const api: string = "https://jsonplaceholder.typicode.com/users";

// get all users from api
export function getAllUsers() {
  return axios.get(api);
}

// get specific user by id
export function getUserById(id: number) {
  return axios.get(`${api}/${id}`);
}

// post new user
