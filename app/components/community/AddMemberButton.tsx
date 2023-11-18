import React, { useState } from 'react';

import AddMemberModal from './AddMemberModal';
import { Button } from '@mui/material';

export default function AddMemberButton() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} variant='contained' color='primary'>
        Add member
      </Button>
      <AddMemberModal handleClose={handleClose} open={open} />
    </>
  );
}
