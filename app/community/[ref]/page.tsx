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

  return (
    <>
      <Typography variant='h3' paddingBottom={5}>
        {community.name}
      </Typography>
      <Typography variant='body1' paddingBottom={1}>
        <img src={`https://giveth.mypinata.cloud/ipfs/${community.landDeed}`} />
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
