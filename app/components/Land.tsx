'use client';

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { sepolia, useChainId, useWalletClient } from 'wagmi';
import { useSigner } from '../utils/easWagmiUtils';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { generateRandomName } from '../utils/generateRandomName';
import { generateRandNumber } from '../utils/generateRandNumber';

const easContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e';
const schemaUID =
  '0xec7357746601ffd90f053aca9e4670d28b19e7af585bcbbc0ed23ce03f89f1f4';

const eas = new EAS(easContractAddress);

const generateRandomUserId = () => Math.floor(Math.random() * 16777215);

export default function Land() {
  const signer = useSigner();
  const chainId = useChainId();
  const schemaEncoder = new SchemaEncoder(
    'uint24 userId,bytes32 name,uint8 level,bool stewardShip'
  );

  eas.connect(signer as any);

  const encodedData = schemaEncoder.encodeData([
    { name: 'userId', value: generateRandomUserId(), type: 'uint24' },
    { name: 'name', value: generateRandomName(), type: 'bytes32' },
    { name: 'level', value: generateRandNumber(), type: 'uint8' },
    { name: 'stewardShip', value: true, type: 'bool' },
  ]);
  async function easTest() {
    if (!signer) return;
    try {
      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: '0x0000000000000000000000000000000000000000',
          revocable: true, // Be aware that if your schema is not revocable, this MUST be false
          data: encodedData,
        },
      });
      console.log('tx', tx);
      const newAttestationUID = await tx.wait();
      console.log('New attestation UID:', newAttestationUID);
      console.log('signer', signer);
    } catch (error) {
      console.log('Errrrrro,', error);
    }
  }
  useEffect(() => {
    if (chainId !== arbitrum.id) {
      // Check if not on Ethereum mainnet
      console.error('Please connect to the Arbitrum network');
      return;
    }

    // Rest of your code here...
  }, [chainId, signer]);

  return (
    <div>
      <Button onClick={easTest} color='secondary'>
        Submit Data
      </Button>
    </div>
  );
}
