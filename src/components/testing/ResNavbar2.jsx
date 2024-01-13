import "./ResNavbar2.css";

export default function ResNavbar2() {
  return (
    <>
      <header class="header">
        <a href="#" class="logo">
          Logo
        </a>

        <input type="checkbox" id="check" />
        <label for="check" class="icons">
          <i class="bx bx-menu" id="menu-icon"></i>
          <i class="bx bx-x" id="close-icon"></i>
        </label>

        <nav class="navbar">
          <a href="#" class="nav-item">
            Home
          </a>
          <a href="#" class="nav-item">
            About
          </a>
          <a href="#" class="nav-item">
            Gallery
          </a>
          <a href="#" class="nav-item">
            Services
          </a>
          <a href="#" class="nav-item">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
