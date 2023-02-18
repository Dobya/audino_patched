import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function LoadData() {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    // code to run on component mount
  }, []);

  const handleFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('audio_files', files[i]);
    }
    axios.post('/upload', formData)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form onSubmit={handleFileUpload}>
        <input type="file" name="audio_files" onChange={e => setFiles(e.target.files)} multiple />
        <Button variant="primary" type="submit">Upload</Button>
      </form>
    </div>
  );
}

export default LoadData;
