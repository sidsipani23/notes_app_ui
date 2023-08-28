import * as React from 'react';
import Container from '@mui/material/Container';

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Container>{children}</Container>;
}
