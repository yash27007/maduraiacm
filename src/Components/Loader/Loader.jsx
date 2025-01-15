import { useEffect, useState } from 'react';
import styles from './Loader.module.css'; // Importing CSS module
import logo from '/Logo/Logo.png'; // Adjust the path to your logo

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading state for 3 seconds before content is ready
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulate the end of loading
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <img src={logo} alt="Website Logo" className={styles.logo} />
      </div>
    );
  }

  return null; // Hide the loader once content is loaded
};

export default Loader;
