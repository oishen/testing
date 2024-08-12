function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">Portfolio.</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav text-center row-gap-1 column-gap-5">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skill" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#skill" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#skill" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
