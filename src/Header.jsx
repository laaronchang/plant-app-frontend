import { Link } from "react-router-dom";

export function Header() {

return (
  <header>
    <nav>
      <a href="/">Home</a> | <a href="/login">Login</a> | <Link to="/signup">Signup</Link> | <Link to="/logout">Logout</Link>
    </nav>
  </header>
)
}


