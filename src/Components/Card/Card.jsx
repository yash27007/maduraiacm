import React, { useState, useEffect, useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Card.module.css";

function Card(props) {
  const [isToggled, setIsToggled] = useState(false);
  const socialCardRef = useRef(null);

  useEffect(() => {
    const socialCard = socialCardRef.current;
    if (isToggled) {
      socialCard.classList.add(styles.animation);
      socialCard.classList.remove(styles.down_animation);
    } else {
      if (socialCard.classList.contains(styles.animation)) {
        socialCard.classList.add(styles.down_animation);
        setTimeout(() => {
          socialCard.classList.remove(styles.down_animation);
          socialCard.classList.remove(styles.animation);
        }, 500);
      }
    }
  }, [isToggled]);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.card__border}>
          <img
            src={props.image}
            alt="card image"
            className={styles.card__img}
          />
        </div>

        <h3 className={styles.card__name}>{props.name.toUpperCase()}</h3>
        <span className={styles.card__profession}>{props.position.toUpperCase()}</span>
        <h4 className={styles.card__designation}>{props.designation.toUpperCase()}</h4>

        <div className={styles.card__social} ref={socialCardRef}>
          <div className={styles.card__social_control}>
            {/* Toggle button */}
            <div className={styles.card__social_toggle} onClick={handleToggle}>
              <AddIcon fontSize="small"/>
            </div>

            <span className={styles.card__social_text}>LET'S CONNECT</span>

            {/* Card social */}
            <ul className={styles.card__social_list}>
              <a
                href={props.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card__social_link}
              >
                <LinkedInIcon fontSize="medium"/>
              </a>

              <a
                href={`mailto:${props.email}`} // Use the email from props
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card__social_link}
              >
                <EmailIcon fontSize="medium"/>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
