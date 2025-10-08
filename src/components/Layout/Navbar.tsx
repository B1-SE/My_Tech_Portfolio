import { Link } from "react-scroll";

type NavLink =
  | { to: string; label: string; external?: false }
  | { href: string; label: string; external: true };

const navLinks: NavLink[] = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
    <ul className="flex justify-center gap-8">
      {navLinks.map((link) =>
        link.external ? (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-teal-400 transition-colors capitalize"
            >
              {link.label}
            </a>
          </li>
        ) : (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-teal-400 transition-colors capitalize"
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  </nav>
);

export default Navbar;
