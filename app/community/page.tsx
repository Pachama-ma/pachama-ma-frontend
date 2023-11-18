import { Container, Typography } from '@mui/material';

import AddMemberButton from '../components/community/AddMemberButton';
import Members from '../components/community/Members';
import React from 'react';

export default async function Community() {
  return (
    <>
      <CommunityDetail />
      <br />
      <Members />
      <br />
      <AddMemberButton />
    </>
  );
}

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
