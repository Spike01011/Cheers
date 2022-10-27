import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
	const url = "https://localhost:7021/account/login";
	function handle(e) {
		const newData = {...data};
		newData[e.target.id] = e.target.value;
		setData(newData);
	}

	function submit(e) {
		e.preventDefault();
		axios
			.post(url, {
				Email: data.Email,
				Password: data.Password,
			},)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("user", res.data.email);
				window.dispatchEvent(new Event("storage"))
				navigate("/");
			});
	}
	const navigate = useNavigate();

	const [data, setData] = useState({
		Email: "",
		Password: "",
	})
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={(e) => submit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Email"
                            label="Email Address"
                            name="Email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => handle(e)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Password"
                            label="Password"
                            type="password"
                            id="Password"
                            autoComplete="current-password"
                            onChange={(e) => handle(e)}
                        />
                        {/*Il Pastram?*/}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="src/Pages/LogInPage/LogInComponent#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="src/Pages/LogInPage/LogInComponent#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

// import React from 'react';
// import {styled} from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import {red} from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// // import "bootstrap/dist/css/bootstrap.min.css";
//
//
// const ExpandMore = styled((props) => {
//     const {expand, ...other} = props;
//     return <IconButton {...other} />
// })(({theme, expand}) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));
//
// const LogInComponent = () => {
//     const [expanded, setExpanded] = React.useState(false);
//
//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };
//
//     return (
//         <Card sx={{maxWidth: 345}}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{backgroundColor: red[500]}} aria-label="recipe">
//                         R
//                     </Avatar>
//                 }
//                 action={
//                     <IconButton aria-label="settings">
//                         <MoreVertIcon/>
//                     </IconButton>
//                 }
//                 title="Shrimp and Chorizo Paella"
//                 subheader="September 14, 2016"
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image="/static/images/cards/paella.jpg"
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     This impressive paella is a perfect party dish and a fun meal to cook
//                     together with your guests. Add 1 cup of frozen peas along with the mussels,
//                     if you like.
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon/>
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon/>
//                 </IconButton>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon/>
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>Method:</Typography>
//                     <Typography paragraph>
//                         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//                         aside for 10 minutes.
//                     </Typography>
//                     <Typography paragraph>
//                         Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//                         medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//                         occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//                         large plate and set aside, leaving chicken and chorizo in the pan. Add
//                         pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//                         stirring often until thickened and fragrant, about 10 minutes. Add
//                         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//                     </Typography>
//                     <Typography paragraph>
//                         Add rice and stir very gently to distribute. Top with artichokes and
//                         peppers, and cook without stirring, until most of the liquid is absorbed,
//                         15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                         mussels, tucking them down into the rice, and cook again without
//                         stirring, until mussels have opened and rice is just tender, 5 to 7
//                         minutes more. (Discard any mussels that don&apos;t open.)
//                     </Typography>
//                     <Typography>
//                         Set aside off of the heat to let rest for 10 minutes, and then serve.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>
//     );
// }
//
// export default LogInComponent;
