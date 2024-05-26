import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="mr-auto">
        <Link href="/">Home</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </Navbar>
  );
}
