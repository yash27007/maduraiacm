import styles from './ImageCard.module.css';

const ImageCard = ({ image, alt }) => {
  return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <img 
          src={image} 
          alt={alt} 
          className={styles.image}
        />
      </div>
      <div className={styles.imageCaption}>
        <p>{alt}</p>
      </div>
    </div>
  );
};

export default ImageCard;
