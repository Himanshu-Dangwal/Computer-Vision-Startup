import React, { useState } from 'react';

const FetchFacebookImage = () => {
    const [facebookID, setFacebookID] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const fetchFacebookImage = () => {
        const url = `https://graph.facebook.com/${facebookID}/picture?type=large`;
        setImageUrl(url);
    };

    return (
        <div style={styles.container}>
            <h1>Fetch Facebook Profile Image</h1>
            <input 
                type="text" 
                placeholder="Enter Facebook Username/ID" 
                value={facebookID} 
                onChange={(e) => setFacebookID(e.target.value)} 
            />
            <button onClick={fetchFacebookImage}>Fetch Image</button>
            {imageUrl && <img src={imageUrl} alt="Profile" style={styles.image} />}
            <button onClick={() => window.location.href = '/'}>Back to Upload</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
    },
    image: {
        marginTop: '20px',
        maxWidth: '100%',
        height: 'auto',
    }
};

export default FetchFacebookImage;
