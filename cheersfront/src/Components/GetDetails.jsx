import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {clearPaymentData} from "../pages/PaymentPage/PaymentSlice";
import {useDispatch} from "react-redux";

export default function GetDetails() {
	const url = "https://localhost:7021/idea/GetIdea";
	const photoUrl = "https://localhost:7021/image/GetImagesForIdea";
	const deletePhotoUrl = "https://localhost:7021/image/RemoveImage";
	const deleteIdeaUrl = "https://localhost:7021/idea/RemoveIdea"; //TODO to delete img from database
	const reactUrl = window.location.href;
	const reactUrlLength = reactUrl.split("/").length;
	const id = reactUrl.split("/").at(reactUrlLength - 1);
	const dispatch = useDispatch();
	const [data, setData] = useState();
	const [photos, setPhotos] = useState();
	const [show, setShow] = useState(false);
	const [activePhoto, setActivePhoto] = useState({identifier: null, actualImg: null});
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const navigate = useNavigate();

	function clearPaymentValues() {
		dispatch(clearPaymentData())
	}

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(`${url}/${id}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
				const responseData = await response.data;
				setData(responseData);
			} catch (e) {
				console.error(e);
			}
		};
		get()
	}, []);

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(`${photoUrl}/${id}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
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
		setActivePhoto(
			<img id={pic.Id} src={`data:image/png;base64,${pic.Image}`}
				 style={{maxWidth: 340, maxHeight:340}} onClick={HandleModalClick} alt={''}/>);
		setActivePhoto({
			identifier: pic.Id,
			actualImg: <img id={pic.Id} src={`data:image/png;base64,${pic.Image}`}
							style={{maxWidth: 600, maxHeight:600}} onClick={HandleModalClick} alt={''}/>,
		})
	}

	const ManagePhotos = () => {
		if (photos != null) {
			return (
				<div style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr 1fr",
					marginBottom: "30px",
					marginTop: "30px",
					rowGap: "30px",
					columnGap: "15px"
				}}>
					{photos.map(pic => <img id={pic.Id} src={`data:image/png;base64,${pic.Image}`}
											style={{maxWidth: 340, maxHeight:240}} onClick={(e, x = pic) => {
						HandlePicClick(e, x)
					}} alt={''}/>)}
				</div>
			)
		}
	}

	const DeletePhoto = (e, imgId) => {
		e.preventDefault();
		axios
			.delete(`${deletePhotoUrl}/${imgId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			})
			.then((res) => {
				console.log(res.data);
				window.location.reload();
			});
	}

	function HandleDeleteIdea(e) {
		e.preventDefault();
		console.log(id);
		axios.delete(`${deleteIdeaUrl}/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
			.then((res => {
				console.log(res.data);
				navigate("/");
			}))
	}

	function DisplayAddPhoto() {
		if (localStorage.getItem("user") === data.Author.Email) {
			return (
				<Link
					type={"button"}
					style={{textAlign: "center"}}
					to={`/add-photo/${id}`}
					className={"btn btn-light"}>
					Add Photo
				</Link>
			)
		}
	}

	function DisplayEdit() {
		if (localStorage.getItem("user") === data.Author.Email) {
			return (
				<Link
					type={"button"}
					style={{textAlign: "center"}}
					to={`/edit-idea/${id}`}
					className={"btn btn-light"}>
					Edit Idea
				</Link>
			)
		}
	}

	function DisplayDeleteBtn() {
		if (localStorage.getItem("user") === data.Author.Email || localStorage.getItem("isAdmin") === "true") {
			return (
				<button
					style={{textAlign: "center"}}
					className={"btn btn-danger"}
					onClick={(e) => {
						HandleDeleteIdea(e)
					}}>
					Delete
				</button>
			)
		}
	}

	return data != null ? (
		<div className={"DetailsDiv"}>
			<Modal show={show} onHide={handleClose} size={"xl"}>
				<Modal.Body>{activePhoto.actualImg}</Modal.Body>
				<Modal.Footer>
					<button className={"btn btn-danger"}
							onClick={(e, imgId = activePhoto.identifier) => DeletePhoto(e, imgId)}>Delete
					</button>
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
					marginBottom: "50px",
				}}>
				<Link
					type={"button"}
					onClick={clearPaymentValues}
					className={"btn btn-light"}
					style={{textAlign: "center"}}
					as={Link} to={`/payment/${id}`}>
					🍻 Buy us a beer
				</Link>
				{DisplayAddPhoto()}
				{DisplayEdit()}

				{DisplayDeleteBtn()}

			</div>
		</div>
	) : (
		<p>Loading...</p>
	);
}
