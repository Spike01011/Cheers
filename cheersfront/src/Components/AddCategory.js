import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddCategory() {
    const url = "https://localhost:7021/home/AddCategory";

    const [data, setData] = useState({
        Name: "",
    });
    const navigate = useNavigate();


    function handle(e) {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function submit(e) {
        e.preventDefault();
        axios
            .post(url, {
                Name: data.Name,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                navigate("/");
            });
    }

    return (
        <form className={"DetailsDiv"}
              style={{display: "flex", flexDirection: "column", width: "auto"}}>
            <h1
                className={"TitleClass"}
                style={{
                    textAlign: "center",
                    paddingInline: "10%",
                    marginBottom: "50px",
                }}
            >
                Add Category
            </h1>
            <input className={"DetailsDivContents align-self-md-center"}
                   onChange={(e) => handle(e)} id={"Name"} value={data.Name} placeholder={"Name"} type={"text"}
                   style={{width: "250px"}}
            />

            <button className={"btn btn-info align-self-md-center"} onClick={(e) => submit(e)}
                    style={{width: "100px"}}>Submit
            </button>
        </form>
    )
}
