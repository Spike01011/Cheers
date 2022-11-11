import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function Register() {
    const url = "https://localhost:7021/account/signup";
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
                UserName: data.UserName,
                Email: data.Email,
                Password: data.Password,
                ConfirmPassword: data.ConfirmPassword,
            })
            .then((res) => {
                console.log(res.data);
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
                Register
            </h1>
            <input className={"DetailsDivContents"}
                   onChange={(e) => handle(e)}
                   id={"UserName"}
                   value={data.UserName}
                   placeholder={"UserName"}
                   type={"text"}
                   style={{width: "250px"}}

            />
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
            <input
                className={"DetailsDivContents"}
                style={{width: "250px"}}
                onChange={(e) => handle(e)}
                id={"ConfirmPassword"}
                value={data.ConfirmPassword}
                placeholder={"ConfirmPassword"}
                type={"password"}
            />


            <button className={"btn btn-info align-self-md-center"} onClick={(e) => submit(e)}
                    style={{width: "100px"}}>Submit
            </button>
        </form>
    )
}
