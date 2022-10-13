import React, {useState} from "react";
import Api from "../Utils/Api";
import axios from "axios";

export default function Employee() {

	const defaultImageSrc = '/img/default-image.png'

	const initialValues = {
		ideaId: 0,
		imageName: "",
		imageSrc: defaultImageSrc,
		imageFile:null,
	}

	const [values, setValues] = useState(initialValues)
	const [errors, setErrors] = useState({})


	const PostImage = (formData, onSucces) =>{
		var url = "/Home/AddImage";
		Api.post(url, formData)
			.then(res => {
			onSucces()
		})
			.catch(err => console.error(err));
	}

	const handleInputChange = e => {
		const {name, value} = e.target;
		setValues({
			...values,
			[name]:value
		})
	}

	const showPreview = e => {
		if (e.target.files && e.target.files[0]){
			let imageFile = e.target.files[0];
			const reader = new FileReader();
			reader.onload = x =>{
				setValues({
					...values,
					imageFile: imageFile,
					imageSrc: x.target.result,
				})
			}
			reader.readAsDataURL(imageFile)

		}
		else {
			setValues({
				...values,
				imageFile: null,
				imageSrc: defaultImageSrc,
			})
		}
	}

	function validate(){
		let temp = {}
			temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
		setErrors(temp)
		return Object.values(temp).every(x => x==true)
	}

	const resetForm = () => {
		setValues(initialValues);
		document.querySelector(".image-uploader").value = null;
		setErrors({});
	}

	const handleFormSubmit = e => {
		e.preventDefault();
		if (validate()){
			const formData = new FormData();
			formData.append('ideaId', values.ideaId)
			formData.append('imageSrc', values.imageSrc)
			formData.append('imageName', values.imageName)
			formData.append('imageFile', values.imageFile)
			PostImage(formData, resetForm)
		}

	}


	return (
		<>
			<div className={"container text-center"}>
				<p className={"lead"}>Photo</p>
			</div>
			<img src={values.imageSrc}/>
			<form autoComplete={"off"} noValidate onSubmit={handleFormSubmit}>
				<input type={"file"} accept={"image/*"} onChange={showPreview} id={"image-uploader"}/>
				<button type={"submit"} className={"btn btn-light"}>Submit</button>
			</form>
		</>
	)
}