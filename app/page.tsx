import Header from './components/Header';
import Land from './components/Land';
import ConnectWallet from './components/ConnectWallet';
import { Container, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <ConnectWallet />
    </Container>
  );
}
