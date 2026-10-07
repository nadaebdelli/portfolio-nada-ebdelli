import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <div className="navbar-shell">
      <header className="navbar">
        <a className="navbar__logo" href="#hero" aria-label="Back to the top">
          N<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className="navbar__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;
