import { COMMUNITY_SCHEMA, MEMBERSHIP_SCHEMA } from '../config';

import { AllAttestationsResult } from '../types/gql/all-attestations-result.type';
import { Attestation } from '../types/gql/attestation.type';
import { CORE_ATTESTATION_FIELDS } from '../types/fragments/core-attestation-fields.fragment';
import { Member } from '../types/member';
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

export const getAllCommunityMembers = async (): Promise<Member[]> => {
  const where = {
    AND: [
      {
        schemaId: {
          equals: MEMBERSHIP_SCHEMA,
        },
      },
    ],
  };

  const result = await getClient().query<AllAttestationsResult>({
    query,
    fetchPolicy: 'cache-first',
    variables: { where },
  });

  if (result.error) {
    console.error(result.error);
    throw new Error('Failed to fetch members.');
  }

  const members: Member[] = [];
  for (const attestation of result.data.attestations) {
    console.log(attestation);
    const member = JSON.parse(attestation.decodedDataJson);
    if (member.communityUid === COMMUNITY_SCHEMA) {
      members.push(member);
    }
  }
  return members;
};
