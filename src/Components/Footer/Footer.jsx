import React from "react";
import ACMLogo from "./Logo.png";
import styles from "./Footer.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img src={ACMLogo} alt="Madurai ACM Logo" />
        <span>
          <h3>
            Association for
            <br />
            Computing Machinery
          </h3>
          <p>Madurai ACM Professional Chapter</p>
        </span>
      </div>
      <div className={styles.navContainer}>
        <h3>USEFUL LINKS</h3>
        <hr />
        <ul className={styles.footerNavList}>
          <li className={styles.footerNavList__item}>
            <a href="#">HOME</a>
          </li>
          <li className={styles.footerNavList__item}>
            <a href="https://xrds.acm.org/" target="_blank">ACM XRDS</a>
          </li>
          <li className={styles.footerNavList__item}>
            <a href="https://india.acm.org/" target="_blank">ACM INDIA</a>
          </li>
          <li className={styles.footerNavList__item}>
            <a href="https://dl.acm.org/" target="_blank">ACM DIGITAL LIBRARY</a>
          </li>
        </ul>
      </div>
      <div className={styles.contactContainer}>
        <h3>CONTACT</h3>
        <hr />
        <address className={styles.address}>
          <div className={styles.contactItem}>
            <EmailIcon className={styles.mailIcon} />
            <a className={styles.mail} href="mailto:maduraiacm@klu.ac.in">
              maduraiacm@klu.ac.in
            </a>
          </div>
          <div className={styles.contactItem}>
            <PlaceIcon className={styles.locationIcon} />
            <p className={styles.location}>
              Kalasalingam Academy of Research and Education,
              <br />
              Krishnankoil, Srivilliputhur,
              <br />
              Tamil Nadu 626126
            </p>
          </div>
        </address>
      </div>
      <hr className={styles.footerSeparator} />
      <div className={styles.copyrightContainer}>
        <p>
          Madurai ACM Professional Chapter &copy; {year} <br />
          Designed and Developed by <a href="https://www.linkedin.com/in/yashwantharavind/" target="_blank">Yashwanth Aravind</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
