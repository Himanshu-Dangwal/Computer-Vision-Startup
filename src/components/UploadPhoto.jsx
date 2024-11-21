import React from 'react';

const UploadPhoto = () => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Handle the file upload logic here
            console.log('File uploaded:', file.name);
        }
    };

    return (
        <div style={styles.container}>
            <h1>Upload Your Photo</h1>
            <input type="file" id="uploadPhoto" onChange={handleFileUpload} style={{ display: 'none' }} />
            <button onClick={() => document.getElementById('uploadPhoto').click()}>Upload Photo</button>
            <button onClick={() => window.location.href = '/fetch'}>Upload Using Facebook</button>
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
    }
};

export default UploadPhoto;
