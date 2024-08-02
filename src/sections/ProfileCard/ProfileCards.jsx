import React from "react";
import Card from "../../Components/Card/Card";
import { CoreTeam } from "../../constants/data";
import styles from "./ProfileCards.module.css";

function ProfileCards() {
  return (
    <section className={styles.profileSection} id="team">
      <div className={styles.title}>
        <h2 className={styles.title}>THE BOARD</h2>
      </div>
      <div className={styles.profileContainer}>
        {CoreTeam.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              position={item.position}
              image={item.image}
              email={item.email}
              linkedIn={item.linkedIn}
              designation={item.designation}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProfileCards;
