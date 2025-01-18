import { Link } from 'react-router-dom';

const NotFound = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            fontFamily: '"Arial", sans-serif',
            padding: '20px',
        },
        title: {
            fontSize: '8rem',
            margin: '0',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        message: {
            fontSize: '1.8rem',
            margin: '1rem 0',
            color: '#cccccc',
        },
        link: {
            fontSize: '1.2rem',
            color: '#ff6f61',
            textDecoration: 'none',
            border: '2px solid #ff6f61',
            borderRadius: '25px',
            padding: '10px 20px',
            transition: 'all 0.3s ease',
            marginTop: '20px',
        },
        linkHover: {
            backgroundColor: '#ff6f61',
            color: '#1a1a1a',
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
            <Link 
                to="/" 
                style={styles.link}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.linkHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;