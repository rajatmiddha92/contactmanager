import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {blue } from '@mui/material/colors';
import './delcontactinfo.css'
import Button from '@mui/material/Button';

const DeleteContactComfirmation=()=> {
    return (
        <>
        <div className='container-2'>
        <section className='box-3'>
          <DeleteIcon sx={{ fontSize: 40,color:blue[400] }}  className='sucess' />
          <h4 className='text-head-3'>Delete Contacts</h4>
          <h5 className='drop-3'>Sure you want delete this Contacts ?</h5>
          <div style={{display:'inline-block'}}>
          <Button className='cancel' variant="contained">Cancel</Button>
          <Button style={{color:'black'}} variant="text">OK</Button>
          </div>
          
        </section>
      </div>
        </>
    );
}

export default DeleteContactComfirmation;