'use client';

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import React from 'react';

interface IAddMemberModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddMemberModal = ({ open, handleClose }: IAddMemberModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Add member
        </Typography>
        <Stack spacing={2}>
          <TextField id='outlined-basic' label='Name' variant='standard' />
          <TextField id='outlined-basic' label='Level' variant='standard' />
          <TextField
            id='outlined-basic'
            label='Stewardship'
            variant='standard'
          />
          <Button onClick={handleClose} variant='contained'>
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default AddMemberModal;
