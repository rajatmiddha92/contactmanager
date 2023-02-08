import React from 'react';
import {blue } from '@mui/material/colors';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DeleteSuccessfullyFile=(props)=> {
    return (
        <>
        <div className='container-2'>
        <section className='box-2'>
          <CheckCircleIcon sx={{ fontSize: 40,color:blue[400] }}  className='sucess' />
          <h4 className='text-head-2'>Deleted Contacts</h4>
        </section>
      </div>
        </>
    );
}

export default DeleteSuccessfullyFile;