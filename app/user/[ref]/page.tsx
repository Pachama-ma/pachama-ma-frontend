import { Container, Stack, Typography } from '@mui/material';
import { DEFAULT_REVALIDATE_TIME } from '../../config';
import { getAllRecipientAttestations } from '../../eas/getAllRecipientAttestations';
import { decodedDataJsonFormatter } from '@/app/utils/decodedDataJsonFormatter';

export default async function UserPage({
  params,
}: {
  params: { ref: string };
}) {
  // Ref is user address or ens name
  const { ref } = params;
  console.log('Params', params);
  let address: string | null = ref;
  if (!address) {
    return (
      <div className='absolute top-0 flex flex-col justify-center h-screen'>
        <div className='flex flex-col items-center gap-5 text-xl'>
          <div>User not found</div>
        </div>
      </div>
    );
  }

  const attestations = await getAllRecipientAttestations(address);
  const extracted = decodedDataJsonFormatter(attestations[0].decodedDataJson);
  console.log('Extracted', extracted);
  return (
    <>
      <Stack>
        <Stack direction={'row'} gap={1}>
          <Typography variant='body1'>Name: </Typography>
          <Typography variant='body1'>{extracted.name}</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <Typography variant='body1'>Level: </Typography>
          <Typography variant='body1'>{extracted.level}</Typography>
        </Stack>
        <Stack direction={'row'} gap={1}>
          <Typography variant='body1'>Stewardship: </Typography>
          <Typography variant='body1'>{extracted.stewardship}</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export const revalidate = DEFAULT_REVALIDATE_TIME;
