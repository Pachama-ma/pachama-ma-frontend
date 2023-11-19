import { AllAttestationsResult } from '../types/gql/all-attestations-result.type';
import { Attestation } from '../types/gql/attestation.type';
import { CORE_ATTESTATION_FIELDS } from '../types/fragments/core-attestation-fields.fragment';
import { MEMBERSHIP_SCHEMA } from '../config';
import React from 'react';
import { getClient } from '../apollo/getClient';
import { gql } from '@apollo/client';

const query = gql`
  ${CORE_ATTESTATION_FIELDS}
  query Attestations($where: AttestationWhereInput) {
    attestations(orderBy: { time: desc }, where: $where) {
      ...CoreAttestationFields
    }
  }
`;

export const getAllRecipientAttestations = async (
  address: string
): Promise<Attestation[]> => {
  const where = {
    AND: [
      {
        recipient: {
          equals: address,
        },
        schemaId: {
          equals: MEMBERSHIP_SCHEMA,
        },
      },
    ],
  };

  const result = await getClient().query<AllAttestationsResult>({
    query,
    variables: { where },
  });

  if (result.error) {
    console.error(result.error);
    throw new Error('Failed to fetch recipient attestations.');
  }

  return result.data.attestations;
};
