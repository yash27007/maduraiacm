
import NavigationBar from '../../Components/NavBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import ImageComponent from '../../Components/GalleryComponent/ImageComponent';
import { GalleryImages } from '../../constants/data';
import './Gallery.css'; 

const Gallery = () => {

  return (
    <>
      <NavigationBar />
      <div className='gallery'>
        <h1>Gallery</h1>
        <div className='gallery-grid'>
          {GalleryImages.map((image, index) => (
            <div key={index} className='gallery-card'>
              <ImageComponent src={image.image} alt={image.alt} />
              <div className='image-caption'>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
