import ListUsers from "../pages/ListUsers";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = [
  {
    path: "/",
    page: Login
  },
  {
    path: "/register",
    page: Register
  },
  {
    path: "/users",
    page: ListUsers
  }
]

export { routes }