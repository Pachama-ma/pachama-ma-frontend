'use client';

import { useEffect, useState } from 'react';

import ConnectButton from './ConnectButton';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import { useAccount } from 'wagmi';
import { Container, Grid, Stack, Typography } from '@mui/material';

type LocalState = {
  isConnected: boolean;
  address: `0x${string}` | undefined;
};

export default function ConnectWallet() {
  const { isConnected, address } = useAccount();
  const [localState, setLocalState] = useState<LocalState>({
    isConnected: false,
    address: undefined,
  });

  useEffect(() => {
    setLocalState({
      isConnected,
      address,
    });
  }, [isConnected, address]);

  return (
    <Stack>
      {localState.isConnected && (
        <Link href={`/user/${localState.address}`}>
          <span>
            <PersonIcon />
            <Typography variant='body1'>Check your profile</Typography>
          </span>
        </Link>
      )}
      <ConnectButton />
    </Stack>
  );
}
