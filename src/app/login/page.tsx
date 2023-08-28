'use client';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import styles from './login.module.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

export default function Login() {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
		const { id } = e.target;
		switch (id) {
			case 'username':
				setUsername(e.target.value);
				break;
			case 'password':
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	}

	return (
		<div className={styles.containerCustom}>
			<Stack spacing={3}>
				<div>
					<TextField
						required
						id='username'
						label='User Name'
						className={styles.inputField}
						value={username}
						type='text'
						onChange={onChangeHandler}
					/>
				</div>
				<div>
					<TextField
						required
						id='password'
						label='Password'
						className={styles.inputField}
						value={password}
						type='password'
						onChange={onChangeHandler}
					/>
				</div>

				<Button variant='contained' color='error'>
					Login
				</Button>
				<IconButton
					style={{
						width: '1rem',
						margin: '1rem auto',
					}}>
					<GoogleIcon />
				</IconButton>
			</Stack>
		</div>
	);
}
