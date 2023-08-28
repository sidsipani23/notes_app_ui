'use client';
import './globals.css';
import type { Metadata } from 'next';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { store } from './store';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
	title: 'Notes',
	description: 'A simple notes app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);
	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);
	return (
		<html lang='en'>
			<body>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<AppBar position='static'>
							<Container maxWidth='xl'>
								<Toolbar disableGutters style={{ display: 'flex' }}>
									{/* Desktop View below*/}
									<Typography
										variant='h6'
										noWrap
										component='a'
										href='/'
										sx={{
											mr: 2,
											display: { xs: 'none', md: 'flex' },
											fontFamily: 'monospace',
											fontWeight: 700,
											letterSpacing: '.3rem',
											color: 'inherit',
											textDecoration: 'none',
											flexGrow: 1,
										}}>
										NOTES
									</Typography>
									<Button
										sx={{
											display: { xs: 'none', md: 'flex' },
											mr: '1rem',
										}}
										variant='outlined'
										color='inherit'
										onClick={() => router.push('/login')}>
										Login
									</Button>
									<Button
										sx={{
											display: { xs: 'none', md: 'flex' },
										}}
										variant='outlined'
										color='inherit'
										onClick={() => router.push('/register')}>
										SignUp
									</Button>

									<IconButton
										onClick={colorMode.toggleColorMode}
										sx={{ ml: 1, display: { xs: 'none', md: 'flex' } }}>
										{theme.palette.mode === 'dark' ? (
											<DarkModeIcon />
										) : (
											<LightModeIcon />
										)}
									</IconButton>

									{/* Mobile View below*/}
									<Typography
										variant='h5'
										noWrap
										component='a'
										href='/'
										sx={{
											mr: 2,
											ml: 1,
											display: { xs: 'flex', md: 'none' },
											flexGrow: 4,
											fontFamily: 'monospace',
											fontWeight: 700,
											letterSpacing: '.3rem',
											color: 'inherit',
											textDecoration: 'none',
										}}>
										NOTES
									</Typography>
									<IconButton
										onClick={colorMode.toggleColorMode}
										sx={{
											ml: 1,
											display: { xs: 'flex', md: 'none', flexGrow: 2 },
										}}>
										{theme.palette.mode === 'dark' ? (
											<DarkModeIcon />
										) : (
											<LightModeIcon />
										)}
									</IconButton>

									<Button
										sx={{
											display: { xs: 'flex', md: 'none' },
											mr: '0.5rem',
										}}
										variant='outlined'
										color='inherit'
										onClick={() => router.push('/login')}>
										Login
									</Button>
									<Button
										sx={{
											display: { xs: 'flex', md: 'none' },
										}}
										variant='outlined'
										color='inherit'
										onClick={() => router.push('/register')}>
										SignUp
									</Button>
								</Toolbar>
							</Container>
						</AppBar>
						{children}
					</ThemeProvider>
				</Provider>
			</body>
		</html>
	);
}
