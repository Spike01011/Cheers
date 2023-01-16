import React, {useState} from 'react';
import Fab from "@mui/material/Fab";

const AddImage = () => {
	const [values, setValues] = useState('/img/default-image.png')
	const [visible, setVisible] = useState(true)

	const ana = () => {
		setVisible(!visible)
	}

	const showPreview = e => {
		if (e.target.files && e.target.files[0]) {
			let imageFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = x => {
				setValues(x.target.result)
			}
			reader.readAsDataURL(imageFile)
		}
	}
	return (
		<div className={"DetailsDiv"}>
			<p style={{display: "inline", marginRight: 10}}>Add Primary Image</p>
			<Fab style={{display: visible ? visible : 'none'}} color="primary" aria-label="add" onClick={ana}>
				+
			</Fab>

			<div style={{display: !visible ? visible : 'none'}}>
				<input type={"file"} accept={"image/*"} id={"image-uploader"} onChange={showPreview}/>
				{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
				<img style={{maxWidth: 240, maxHeight: 140}} src={values} alt={'/img/default-image.png'}/>
			</div>
		</div>
	)
};

export default AddImage;