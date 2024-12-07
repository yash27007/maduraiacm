import { useState, useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./NavigationBar.module.css";
import ACMLogo from "./Logo.svg";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <a href="#">
          <div className={styles.logoContainer}>
            <img src={ACMLogo} alt="ACM Logo" className={styles.logoImage} />
            <div className={styles.logoText}>
              <h1 className="">
                Association for
                <br />
                Computing Machinery
              </h1>
              <p className="">Madurai ACM Professional Chapter</p>
            </div>
          </div>
        </a>

        <div
          className={`${styles.nav__menu} ${showMenu ? styles.show_menu : ""}`}
          id="nav-menu"
        >
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
            <Link to="/" className={styles.nav__link} onClick={closeMenu}>
                <NorthEastIcon />
                <span>Home</span>
            </Link>
            </li>

            <li className={styles.nav__item}>
              <a href="#about" className={styles.nav__link} onClick={closeMenu}>
                <NorthEastIcon />
                <span>About Us</span>
              </a>
            </li>

            <li className={styles.nav__item}>
              <a href="#team" className={styles.nav__link} onClick={closeMenu}>
                <NorthEastIcon />
                <span>Team</span>
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link} onClick={closeMenu}>
                <NorthEastIcon />
                <span>Events</span>
              </a>
            </li>
            <li className={styles.nav__item}>
            <Link to="/gallery" className={styles.nav__link} onClick={closeMenu}>
                <NorthEastIcon />
                <span>Gallery</span>
            </Link>
            </li>
          </ul>
          <div className={styles.nav__close} id="nav-close" onClick={closeMenu}>
            <CloseIcon />
          </div>

          <div className={styles.nav__social}>
            <a
              href="https://www.instagram.com/maduraiacm?igsh=aG9iOGV1MWtjejdl"
              target="_blank"
              className={styles.nav__social__link}
              onClick={closeMenu}
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/madurai-acm-professional-chapter-80409b31b/"
              target="_blank"
              className={styles.nav__social__link}
              onClick={closeMenu}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div
          className={styles.nav__toggle}
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
}

export default NavigationBar;
