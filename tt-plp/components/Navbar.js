import { useState, useEffect, useRef } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>TT Store</div>

      <ul className={`${styles.menu} ${styles.desktopMenu}`}>
        <li>New</li>
        <li>Bags</li>
        <li>Accessories</li>
        <li>Contact</li>
      </ul>

      <div
        ref={hamburgerRef}
        className={styles.hamburger}
        onClick={handleToggle}
      >
        {isOpen ? "×" : "☰"}
      </div>

      {isOpen && (
        <ul ref={menuRef} className={`${styles.menu} ${styles.mobileMenu}`}>
          <li onClick={handleToggle}>New</li>
          <li onClick={handleToggle}>Bags</li>
          <li onClick={handleToggle}>Accessories</li>
          <li onClick={handleToggle}>Contact</li>
        </ul>
      )}
    </nav>
  );
}
