import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {
    const url = "https://localhost:7021/account/login";
    const [data, setData] = useState({
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
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
                Email: data.Email,
                Password: data.Password,
            })
            .then((res) => {
                try {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", res.data.email);
                    window.dispatchEvent(new Event("storage"));
                } catch (e) {
                    console.error(e);
                }
                navigate("/");
            });
    }

    return (
        <form className={"DetailsDiv"}
              style={{display: "flex", flexDirection: "column"}}>
            <h1
                className={"TitleClass"}
                style={{
                    textAlign: "center",
                    paddingInline: "10%",
                    marginBottom: "50px",
                }}
            >
                Log In
            </h1>
            <input className={"DetailsDivContents"}
                   style={{width: "250px"}}
                   onChange={(e) => handle(e)}
                   id={"Email"}
                   value={data.Email}
                   placeholder={"Email"}
                   type={"text"}
            />
            <input className={"DetailsDivContents"}
                   style={{width: "250px"}}
                   onChange={(e) => handle(e)}
                   id={"Password"}
                   value={data.Password}
                   placeholder={"Password"}
                   type={"password"}
            />
            <button className={"btn btn-info align-self-md-center"} onClick={(e) => submit(e)}
                    style={{width: "100px"}}>Submit
            </button>
        </form>
    )
}
