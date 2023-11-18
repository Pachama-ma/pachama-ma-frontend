'use client';

import { useEffect, useState } from 'react';

import ConnectButton from './ConnectButton';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import { useAccount } from 'wagmi';

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
    <div>
      {localState.isConnected && (
        <Link href={`/user/${localState.address}`}>
          <PersonIcon />
        </Link>
      )}
      <ConnectButton />
    </div>
  );
}
