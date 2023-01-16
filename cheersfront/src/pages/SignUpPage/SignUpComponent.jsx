import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import axios from "axios";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Link, useNavigate} from "react-router-dom";
import CopyRight from "../../Components/Shared/CopyRight";

const theme = createTheme();

const SignUpComponent = () => {
	const url = "https://localhost:7021/account/signup";
	const navigate = useNavigate();

	const [data, setData] = useState({
		Email: "",
		Password: "",
		ConfirmPassword: "",
	})

	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(data);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Username: data.Email,
				Email: data.Email,
				Password: data.Password,
				ConfirmPassword: data.ConfirmPassword,
			})
			.then((res) => {
				navigate("/login");
			});
	}

	// const handleSubmit = (event) => {
	//     event.preventDefault();
	//     const data = new FormData(event.currentTarget);
	//     console.log({
	//         email: data.get('email'),
	//         password: data.get('password'),
	//     });
	// };

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline/>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{m: 1, backgroundColor: 'secondary.main'}}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box component="form" noValidate onSubmit={(e) => submit(e)} sx={{mt: 3}}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="Email"
									label="Email Address"
									name="Email"
									autoComplete="email"
									onChange={(e) => handle(e)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="Password"
									label="Password"
									type="password"
									id="Password"
									autoComplete="new-password"
									onChange={(e) => handle(e)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="ConfirmPassword"
									label="Second Password"
									type="password"
									id="ConfirmPassword"
									autoComplete="new-password"
									onChange={(e) => handle(e)}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value="allowExtraEmails" color="primary"/>}
									label="I want to receive inspiration, marketing promotions and updates via email."
								/>
							</Grid>
						</Grid>
						<Fab color="primary" aria-label="add">
							+
						</Fab>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{mt: 3, mb: 2}}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link
									to={'/login'} type={Link}
									as={'button'} variant="body2">
									{"Have an account? LogIn"}
								</Link>
							</Grid>
						</Grid>

					</Box>
				</Box>
				<CopyRight sx={{mt: 5}}/>
			</Container>
		</ThemeProvider>
	);
}

export default SignUpComponent;
