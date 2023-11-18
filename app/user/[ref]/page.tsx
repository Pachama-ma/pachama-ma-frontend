import { DEFAULT_REVALIDATE_TIME } from '../../config';
import { getAllRecipientAttestations } from '../../eas/getAllRecipientAttestations';

export default async function UserPage({
  params,
}: {
  params: { ref: string };
}) {
  // Ref is user address or ens name
  const { ref } = params;

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

  return (
    <>
      <div>User</div>
      <pre>{JSON.stringify(attestations, null, 2)}</pre>
    </>
  );
}

export const revalidate = DEFAULT_REVALIDATE_TIME;
