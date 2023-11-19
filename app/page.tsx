import { Container, Stack, Typography } from '@mui/material';

import CommunityList from './components/communitites/CommunityList';

export default function Home() {
  return (
    <Container>
      <Stack>
        <CommunityList />
      </Stack>
    </Container>
  );
}
