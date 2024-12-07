import styles from "./About.module.css";
import SteppingStone from "./SteppingStone.png";
function About(){
    return <section className={styles.aboutContainer} id='about'>
        <div className={styles.left}>
        <article className={styles.content}>
          <h2>ABOUT ACM</h2>
          <p>
          ACM unites computing educators, researchers, and professionals to share ideas and tackle challenges. It promotes high standards and provides lifelong learning, career development, and networking opportunities.
          </p>
          <p>
          ACM Professional Chapters offer local networking, access to technological advances, lectures by experts, cutting-edge seminars, volunteer training, and newsletters.
          </p>
        </article>
        <button className={styles.button} aria-label="Become a member" type="button">
          <a href="https://www.acm.org/membership" target="_blank" rel="noopener noreferrer">Become a Member</a>
        </button>
      </div>

      <div className={styles.right}>
        <img src={SteppingStone} alt="Stepping Stone"></img>
      </div>

    </section>
}

export default About;
