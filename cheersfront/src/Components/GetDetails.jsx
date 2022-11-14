import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Modal, Button} from "react-bootstrap";

export default function GetDetails() {
	const url = "https://localhost:7021/home/GetIdea";
	const photoUrl = "https://localhost:7021/home/GetImagesForIdea";
	const deletePhotoUrl = "https://localhost:7021/home/RemoveImage";
	const reactUrl = window.location.href;
	const reactUrlLength = reactUrl.split("/").length;
	const id = reactUrl.split("/").at(reactUrlLength - 1);
	const [data, setData] = useState();
	const [photos, setPhotos] = useState();
	const [show, setShow] = useState(false);
	const [activePhoto, setActivePhoto] = useState({identifier: null, actualImg: null});
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(`${url}/${id}`);
				const responseData = await response.data;
				setData(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);
	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(`${photoUrl}/${id}`);
				const responseData = await response.data;
				setPhotos(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get();
	}, []);

	const HandleModalClick = () => {
		setActivePhoto(null);
		handleClose();
	}

	const HandlePicClick = (e, pic) => {
		handleShow();
		setActivePhoto(<img id={pic.Id} src={`data:image/png;base64,${pic.Image}`} style={{width: "auto", maxWidth: "1100px"}} onClick={HandleModalClick}/>);
		setActivePhoto({
			identifier: pic.Id,
			actualImg: <img id={pic.Id} src={`data:image/png;base64,${pic.Image}`} style={{width: "auto", maxWidth: "1100px"}} onClick={HandleModalClick}/>,
		})
	}

	const ManagePhotos = () => {
		if (photos != null) {
			return (
				<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginBottom: "30px", marginTop: "30px", rowGap: "30px", columnGap: "15px"}}>
					{photos.map(pic => <img lmao={pic.Id} src={`data:image/png;base64,${pic.Image}`} style={{width: "350px"}} onClick={(e, x = pic) => {HandlePicClick(e, x)}}/>)}
			</div>
			)
		}
	}

	const DeletePhoto = (e, imgId) => {
		e.preventDefault();
		axios
			.delete(`${deletePhotoUrl}/${imgId}`, {headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
				}})
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			});
	}

	return data != null ? (
		<div className={"DetailsDiv"}>
				<Modal show={show} onHide={handleClose} size={"xl"}>
					<Modal.Body>{activePhoto.actualImg}</Modal.Body>
					<Modal.Footer>
						<button className={"btn btn-danger"} onClick={(e, imgId = activePhoto.identifier) => DeletePhoto(e, imgId)}>Delete</button>
					</Modal.Footer>
				</Modal>
			<i>{data.Author === null ? "Anonymous" : data.Author.Email}</i>
			<h1
				className={"TitleClass"}
				style={{
					textAlign: "center",
					paddingInline: "10%",
					marginBottom: "50px",
				}}
			>
				{data.Name}
			</h1>
			<h3>Pictures:</h3>
			{ManagePhotos()}
			<h3>Category</h3>
			<h5 className={"DetailsDivContents"}>{data.Category.Name}</h5>
			<h3>Description</h3>
			<h5 className={"DetailsDivContents"}>{data.Description.split("\n").map(x => <p>{x}</p>)}</h5>
			<h4>TL;DR</h4>
			<h6 className={"DetailsDivContents"}>{data.ShortDescription}</h6>
			<h3>Target amount: {data.Target}</h3>
			<div
				style={{
					textAlign: "center",
					marginTop: "50px",
				}}
			>
				<button
					style={{textAlign: "center"}}
					as={Link}
					to=""
					className={"btn btn-light"}
				>
					🍻 Buy us a beer
				</button>
				<Link
					type={"button"}
					style={{textAlign: "center"}}
					to={`/add-photo/${id}`}
					className={"btn btn-light"}>
					AddPhoto
				</Link>
			</div>
		</div>
	) : (
		<p>Loading...</p>
	);
}
