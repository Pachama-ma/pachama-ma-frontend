import Link from 'next/link';
import { Typography } from '@mui/material';
import { getAllCommunityAttestations } from '../../eas/getAllCommunityAttestations';

export default async function CommunityList() {
  const attestations = await getAllCommunityAttestations();

  return (
    <>
      <Typography variant='h4' paddingBottom={5}>
        Registered Communities
      </Typography>
      {attestations.map((attestation) => (
        <Typography
          variant='body1'
          paddingBottom={1}
          key={(attestation.decodedDataJson as any).name}
        >
          <Link href={`/community/${attestation.id}`}>
            {(attestation.decodedDataJson as any).name}
          </Link>
        </Typography>
      ))}
    </>
  );
}
