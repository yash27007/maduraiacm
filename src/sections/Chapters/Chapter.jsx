import React from 'react';
import styles from "./Chapter.module.css";
import kareAcmLogo from './KareAcmLogo';
function Chapter(){
return <section className={styles.chapterContainer}>
<div className={styles.top}>
    <h3>MADURAI ACM</h3>
    <p>The Madurai ACM Professional Chapter was chartered by Dr. P. Deepalakshmi of the School of Computing, Kalasalingam Academy of Research and Education, in June 2024.</p>
</div>
<div className={styles.left}>
    <kareAcmLogo/>
    <p>
    The KARE ACM Student Chapter, with over 1000 members, is the largest at our university. We promote computer science through events and networking, fostering growth and connecting students with experts. We are a dedicated community advancing the field and nurturing each member's potentia</p>
</div>
</section>
}
export default Chapter;