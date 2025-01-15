import styles from './EventCard.module.css';

const EventCard = (props) => {
    return (
        <div className={styles.eventCard}>
            <div className={styles.eventImage}>
                <img 
                    src={props.image} 
                    alt={`${props.name} poster`} 
                    className={styles.image} 
                />
            </div>
        </div>
    );
};

export default EventCard;
