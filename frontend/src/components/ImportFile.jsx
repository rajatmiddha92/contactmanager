import React, { useState,useEffect } from 'react';
import './importfile.css';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Button from '@mui/material/Button';
import axios from 'axios';

const ImportFile = () => {
  const [file, setFile] = useState(null);
  
  const handleFileUpload = (e) => {
  setFile(e.target.files[0]);
};

useEffect(() => {
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', 123456);
    try {
      axios.post(`http://localhost:5500/addcontact`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }, [file])

  const handleFileDrop = async (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };
  const Cancel=()=>{
    setFile(null)
  }

  return (
    <React.Fragment>
      <div className='container'>
        <section className='box' onDrop={handleFileDrop} onDragOver={(e) => e.preventDefault()}>
          <NoteAddIcon sx={{ fontSize: 30 }} color="primary" className='icon' />
          <h4 className='text-head'>Import File</h4>
          {!file && <h5 className='drop'>Drag & Drop a CSV File to Upload</h5>}
          {file && <h5 className='drop'>{file.name}</h5>}
          <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} />
          <Button className='btn' onClick={Cancel} variant="contained">Cancel</Button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ImportFile;
