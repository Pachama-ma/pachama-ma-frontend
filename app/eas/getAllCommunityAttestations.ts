import { AllAttestationsResult } from '../types/gql/all-attestations-result.type';
import { Attestation } from '../types/gql/attestation.type';
import { COMMUNITY_SCHEMA } from '../config';
import { CORE_ATTESTATION_FIELDS } from '../types/fragments/core-attestation-fields.fragment';
import { Community } from '../types/community';
import { decodedDataJsonFormatter } from '../utils/decodedDataJsonFormatter';
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

export const getAllCommunityAttestations = async (): Promise<Attestation[]> => {
  const where = {
    schemaId: {
      equals: COMMUNITY_SCHEMA,
    },
  };

  const result = await getClient().query<AllAttestationsResult>({
    query,
    fetchPolicy: 'cache-first',
    variables: { where },
  });

  if (result.error) {
    console.error(result.error);
    throw new Error('Failed to fetch community.');
  }

  const attestations: Attestation[] = [];
  for (const attestation of result.data.attestations) {
    const decodedDataJson = decodedDataJsonFormatter(
      attestation.decodedDataJson
    );
    attestations.push({
      ...attestation,
      decodedDataJson,
    });
  }

  return attestations;
};
