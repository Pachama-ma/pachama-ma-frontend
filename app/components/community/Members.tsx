import { Member } from '../../types/member';
import React from 'react';
import { Typography } from '@mui/material';
import { getAllCommunityMembers } from '../../eas/getAllCommunityMembers';

export default async function Members() {
  const members = await getAllCommunityMembers();

  console.log(members);

  return <div>Members</div>;
  // return (
  //   <>
  //     <Typography variant='h1' paddingBottom={5}>
  //       Members
  //     </Typography>
  //     {members.map((member) => (
  //       <Typography variant='body1' paddingBottom={1} key={member.name}>
  //         {member.name}
  //       </Typography>
  //     ))}
  //   </>
  // );
}
