import NavigationBar from '../../Components/NavBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import ImageCard from '../../Components/GalleryComponent/ImageCard';
import {GalleryImages } from '../../constants/data';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.galleryPage}>
        <h1 className={styles.galleryTitle}>Gallery</h1>

        {GalleryImages.map((category, index) => (
          <div key={index} className={styles.gallerySection}>
            <h2 className={styles.categoryTitle}>{category.title}</h2>
            <div className={styles.galleryGrid}>
              {category.images.map((image) => (
                <ImageCard 
                  key={image.id}
                  image={image.image} 
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </>
  );
};

export default Gallery;
