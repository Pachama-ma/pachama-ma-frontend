'use client';

import { ThemeProvider } from '@emotion/react';

import { createTheme } from '@mui/material/styles';

import { ReactNode } from 'react';
import { Web3Modal } from './contexts/Web3Modal';
import { mainnet, sepolia } from 'wagmi';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import theme from './theme';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;

export default function RootLayout({ children }: any) {
  const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  };
  const chains = [mainnet, sepolia];

  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  createWeb3Modal({ wagmiConfig, projectId });

  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body>
          <Web3Modal>{children}</Web3Modal>
        </body>
      </ThemeProvider>
    </html>
  );
}
