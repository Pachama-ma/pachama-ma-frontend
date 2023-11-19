**Pachamama** is a easy to use DApp that enables communities to collectively manage land:

- _notarize_ land deeds by storing them on IPFS and save hashes on-chain
- _assign_ temporary stewardship to community members
- _attest_ these stewardships in connection with the land deeds
- _prove_ the validity of claims against the relationship between land and steward

## User flow

A community ...

1. buys or inherits land
2. creates a multisig
3. digitizes the deed - i.e. by scanning a document
4. use Pachamama to attest the document to a community (saving the IPFS hash)
5. use Pachamama to attest temporaty stewardship(s) over the land to community members

## What problems does it solve?

- it might be hard to preserve documents like a land deed for a long time
- the history of stewarships is being tracked
- the history of ownership is being tracked (if a community giver ownership to another community)
- collective governance is being formalized
- claims can be made against the attestations
- the pattern can be adopted by any community that wants to manage collective ownership
- the system is generalized enough to notarize other things

## MVP Stack

- Arbitrum
- SAFE Core AA SDK
- Ethereum Attestation service

### backend/blockchain

- Documents are stored on IPFS or FILECOIN - we can save the hash via an attestation or as NFT
- A smart contract should handle the attestation of temporary ownership

### frontend (for community member)

- SAFE Core for account abstraction (create wallet and log-in)
- See own status (Read from EAS)
- See information corresponding to level (Read from EAS)
- See information about community (Read from EAS)

### frontend (for community)

- Store document (write to IPFS snd store hash in NFT, make attestation with metadata)
- Add/remove addresses to/from community pool
- Attest temporary ownership to community members
- Attest information about the communities' view on the member (level, skills, deeds, ...)

### Chains

- Sepolia
- Arbitrum
