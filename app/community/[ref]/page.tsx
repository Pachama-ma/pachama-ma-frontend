import AddMemberButton from '../../components/community/AddMemberButton';
import Members from '../../components/community/Members';
import React from 'react';
import { Typography } from '@mui/material';
import { getCommunity } from '../../eas/getCommunity';

export default async function Community({
  params,
}: {
  params: { ref: string };
}) {
  const { ref } = params;

  const community = await getCommunity(ref);

  console.log('Community', community);
  return (
    <>
      <Typography variant='h3' paddingBottom={5}>
        Community details
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Name: {community.name}
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Land Deed: {community.landDeed}
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        Parcels: {community.parcels}
      </Typography>
      <br />
      <Members communityId={ref} />
      <br />
      <AddMemberButton />
    </>
  );
}
