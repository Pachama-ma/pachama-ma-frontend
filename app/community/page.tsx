'use client';

import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddMemberModal from './AddMemberModal';

const memberNames = ['Jack', 'Jill', 'John', 'Jane', 'James', 'Jenny'];

const Community = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <CommunityDetail />
      <br />
      <Members />
      <br />
      <Button onClick={() => setOpen(true)} variant='contained' color='primary'>
        Add member
      </Button>
      <AddMemberModal handleClose={handleClose} open={open} />
    </Container>
  );
};

const CommunityDetail = () => {
  return (
    <>
      <Typography variant='h1' paddingBottom={5}>
        Community
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Name: Test
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Land Deed: Test
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Parcels: test
      </Typography>
    </>
  );
};

const Members = () => {
  return (
    <>
      <Typography variant='h1' paddingBottom={5}>
        Members
      </Typography>
      {memberNames.map((name) => (
        <Typography variant='body1' paddingBottom={1} key={name}>
          {name}
        </Typography>
      ))}
    </>
  );
};

export default Community;
