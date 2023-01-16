import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const GetIdea = ({parentToChild}) => {
	const defaultImageSrc = '/img/default-image.png';
	const reactUrl = window.location.href;
	const reactUrlLength = reactUrl.split("/").length;
	const id = reactUrl.split("/").at(reactUrlLength - 1);

	const initialValues = {
		ideaId: id,
		imageSrc: defaultImageSrc,
		imageFile: null,
	}
	const [values, setValues] = useState(initialValues)

	return (
		<div>
			<Card sx={{maxWidth: 345}}>
				<CardActionArea>
					<i>{(parentToChild.Author === null) ? "Anonymous" : parentToChild.Author.Email}</i>
					<CardMedia
						style={{objectFit: "fill"}}
						component="img"
						height="140"
						image={parentToChild.DefaultImage === null ? values.imageSrc : parentToChild.DefaultImage}
						alt=""
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" style={{display: "inline-block",
						whiteSpace:"nowrap", maxWidth:130
						}}>
							{parentToChild.Name}
						</Typography>
						<Typography style={{maxWidth:150}} variant="body2" color="text.secondary">
							{parentToChild.ShortDescription}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	);
};

export default GetIdea;