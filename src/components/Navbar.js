import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.navBg};
  color: ${({ theme }) => theme.text};
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.text};
    font-weight: 500;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    gap: 1.5rem;
    position: absolute;
    top: 100%;
    right: 0;
    background: ${({ theme }) => theme.navBg};
    padding: 1.5rem 2rem;
    width: 100%;
    z-index: 99;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Hamburger = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar({ toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <NavbarWrapper>
      <h2>GIF Studios</h2>

      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      <NavLinks isOpen={menuOpen}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button onClick={toggleTheme}>
          <FaMoon />
        </button>
      </NavLinks>
    </NavbarWrapper>
  );
}

export default Navbar;
