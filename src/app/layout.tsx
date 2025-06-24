import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { } from '@mui/x-charts/themeAugmentation';
import type { } from '@mui/x-date-pickers/themeAugmentation';
import type { } from '@mui/x-data-grid-pro/themeAugmentation';
import type { } from '@mui/x-tree-view/themeAugmentation';

import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Box, CssBaseline, Stack } from '@mui/material';

import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/theme';

import AppNavbar from '@/components/AppNavbar';
import Header from '@/components/Header';
import SideMenu from '@/components/SideMenu';

export const metadata: Metadata = {
  title: "Nuages",
  description: "The Nuages application for Ti Kloud Réunion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ti Kloud Réunion" />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: false }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex' }}>
              <SideMenu />
              <AppNavbar />
              <Box
                component="main"
                className="main-content"
                style={{
                  flexGrow: 1,
                  overflow: 'auto',
                }}
              >
                <Stack
                  spacing={2}
                  sx={{
                    alignItems: 'center',
                    mx: 3,
                    pb: 5,
                    mt: { xs: 8, md: 0 },
                  }}
                >
                  <Header />
                  {children}
                </Stack>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
