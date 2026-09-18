export default function Navigation() {
  return (
    <div>
      <nav className="custom-navbar navbar navbar-expand-lg">
        <a className="navbar-brand custom-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav custom-nav">
            <li className="nav-item active">
              <a className="nav-link custom-nav-link home" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link products" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-nav-link about" href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}