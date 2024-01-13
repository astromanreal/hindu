import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <button>
              <a href="#">Contact</a>
            </button>
          </ul>
          <h1 class="logo">Navbar</h1>
        </div>
      </nav>
    </>
  );
}
