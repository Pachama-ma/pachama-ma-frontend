'use client';

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { sepolia, useChainId, useWalletClient } from 'wagmi';
import { useSigner } from '../utils/easWagmiUtils';
import { useEffect } from 'react';

const easContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e';
const schemaUID =
  '0xec7357746601ffd90f053aca9e4670d28b19e7af585bcbbc0ed23ce03f89f1f4';

const eas = new EAS(easContractAddress);

export default function Land() {
  const signer = useSigner();
  const chainId = useChainId();
  const schemaEncoder = new SchemaEncoder(
    'uint24 userId,bytes32 name,uint8 level,bool stewardShip'
  );

  eas.connect(signer as any);

  const encodedData = schemaEncoder.encodeData([
    { name: 'userId', value: '0', type: 'uint24' },
    { name: 'name', value: '', type: 'bytes32' },
    { name: 'level', value: '0', type: 'uint8' },
    { name: 'stewardShip', value: false, type: 'bool' },
  ]);
  async function easTest() {
    if (!signer) return;
    try {
      console.log('Signerrrrrrrrr', signer);
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
    if (chainId !== sepolia.id) {
      // Check if not on Ethereum mainnet
      console.error('Please connect to the Ethereum mainnet');
      return;
    }
    easTest();
    // Rest of your code here...
  }, [chainId, signer]);

  return <div>Hello</div>;
}
