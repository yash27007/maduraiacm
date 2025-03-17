import styles from './Events.module.css';
import EventCard from "../../Components/EventCard/EventCard";
import NavigationBar from "../../Components/NavBar/NavigationBar";
import Footer from "../../Components/Footer/Footer";
import { IndustryColloquiumPoster, HackOdysseyPoster, InaugurationPoster, IndustryDayPoster } from '../../constants/data';

const Events = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.eventsPage}>

        {/* Industry Day */}
        <h2 className={styles.eventSectionTitle}>ACM India Industry Day</h2>
        <div className={styles.eventsGrid}>
          {IndustryDayPoster.map((event, index) => (
            <EventCard 
              key={index} 
              name="Industry Day Posters" 
              image={event.image} 
            />
          ))}
        </div>

        {/* Hack Odyssey Event */}
        <h2 className={styles.eventSectionTitle}>Hack Odyssey</h2>
        <div className={styles.eventsGrid}>
          {HackOdysseyPoster.map((event, index) => (
            <EventCard 
              key={index} 
              name="Hack Odyssey" 
              image={event.image} 
            />
          ))}
        </div>

        {/* Industry Colloquium Event */}
        <h2 className={styles.eventSectionTitle}>Industry Colloquium</h2>
        <div className={styles.eventsGrid}>
          {IndustryColloquiumPoster.map((event, index) => (
            <EventCard 
              key={index} 
              name="Industry Colloquium" 
              image={event.image} 
            />
          ))}
        </div>
        <h2 className={styles.eventSectionTitle}>Madurai ACM Inauguration</h2>
        <div className={styles.eventsGrid}>
          {InaugurationPoster.map((event, index) => (
            <EventCard 
              key={index} 
              name="Madurai ACM Inauguration" 
              image={event.image} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
