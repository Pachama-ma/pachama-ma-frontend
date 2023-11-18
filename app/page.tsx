import { Container, Stack, Typography } from '@mui/material';

import CommunityList from './components/communitites/CommunityList';
import ConnectWallet from './components/ConnectWallet';

export default function Home() {
  return (
    <Container>
      <ConnectWallet />
      <CommunityList />
    </Container>
  );
}
