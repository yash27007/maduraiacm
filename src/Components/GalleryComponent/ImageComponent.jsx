import PropTypes from 'prop-types';

const ImageComponent = ({ src, alt, className }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt} className="gallery-image" />
    </figure>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ImageComponent.defaultProps = {
  className: '',
};

export default ImageComponent;
