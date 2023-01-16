import React, {useState} from "react";
import Api from "../Utils/Api";

export default function AddPhoto() {

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
    const [errors, setErrors] = useState({})


    const PostImage = (formData, onSuccess) => {
        const url = "/image/AddImage";
        Api.post(url, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
				console.log(res)
                onSuccess()
            })
            .catch(err => console.error(err));
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile: imageFile,
                    imageSrc: x.target.result,
                })
            }
            reader.readAsDataURL(imageFile)

        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc,
            })
        }
    }

    function validate() {
        let temp = {}
        temp.imageSrc = values.imageSrc !== defaultImageSrc;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }

    const resetForm = () => {
        setValues(initialValues);
        document.querySelector(".image-uploader").value = null;
        setErrors({});
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('ideaId', values.ideaId)
            formData.append('imageSrc', values.imageSrc)
            formData.append('imageFile', values.imageFile)
            PostImage(formData, resetForm)
        }
    }

    return (
        <>
            <div className={"container text-center"}>
                <p className={"lead"}>Photo</p>
            </div>
            <img style={{maxWidth: 340, maxHeight:340}} src={values.imageSrc} alt={''}/>
            <form autoComplete={"off"} noValidate onSubmit={handleFormSubmit}>
                <input type={"file"} accept={"image/*"} onChange={showPreview} id={"image-uploader"}/>
                <button type={"submit"} className={"btn btn-light"}>Submit</button>
            </form>
        </>
    )
}
