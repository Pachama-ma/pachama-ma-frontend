import { Member } from '../../types/member';
import React from 'react';
import { Typography } from '@mui/material';
import { getAllCommunityMembers } from '../../eas/getAllCommunityMembers';

type Props = {
  communityId: string;
};
export default async function Members({ communityId }: Props) {
  const members = await getAllCommunityMembers(communityId);

  return (
    <>
      <Typography variant='h4' paddingBottom={5}>
        Members
      </Typography>
      {members.map((member) => (
        <Typography variant='body1' paddingBottom={1} key={member.name}>
          {member.name}
        </Typography>
      ))}
    </>
  );
}
