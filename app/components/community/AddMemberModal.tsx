'use client';

import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

import React, { useState } from 'react';
import { useSigner } from '@/app/utils/easWagmiUtils';
import { useParams } from 'next/navigation';

interface IAddMemberModalProps {
  open: boolean;
  handleClose: () => void;
}

const easContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e';
const schemaUID =
  '0x21602b6e2dcffa7acfe555f9e4cc7ecbb77a60fc60fb57b42a68a9a59b75857c';
const eas = new EAS(easContractAddress);

const AddMemberModal = ({ open, handleClose }: IAddMemberModalProps) => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('0'); // Default level is '0'
  const [stewardship, setStewardship] = useState('');
  const { ref } = useParams();
  console.log('Params', ref);
  const schemaEncoder = new SchemaEncoder(
    'string communityUid,string name,uint8 level,string stewardship'
  );
  const signer = useSigner();
  eas.connect(signer as any);

  const encodedData = schemaEncoder.encodeData([
    { name: 'communityUid', value: ref, type: 'string' },
    { name: 'name', value: name, type: 'string' },
    { name: 'level', value: level, type: 'uint8' },
    { name: 'stewardship', value: stewardship, type: 'string' },
  ]);

  async function attestMember() {
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

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Add member
        </Typography>
        <Stack spacing={2}>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='standard'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Level'
            variant='standard'
            value={level}
            onChange={(e) => {
              if (e.target.value.toString().length < 1) return;
              setLevel(e.target.value.toString());
            }}
          />
          <TextField
            id='outlined-basic'
            label='Stewardship'
            variant='standard'
            onChange={(e) => setStewardship(e.target.value)}
          />
          <Button
            onClick={() => {
              attestMember().then(() => {
                handleClose();
              });
            }}
            variant='contained'
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default AddMemberModal;
