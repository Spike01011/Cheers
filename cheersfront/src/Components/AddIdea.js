import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddIdea() {
    const url = "https://localhost:7021/home/addidea";
    const [cat, setCat] = useState([]);
    const [data, setData] = useState({
        Name: "",
        Description: "",
        ShortDescription: "",
        CategoryId: "1",
        Target: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const get = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7021/home/GetCategories"
                );
                const responseData = await response.data;
                console.log("responseData", responseData);
                setCat(responseData);
            } catch (e) {
                console.error(e);
            }
        };
        get();
    }, []);

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
                Description: data.Description,
                ShortDescription: data.ShortDescription,
                CategoryId: parseInt(data.CategoryId),
                /* global BigInt */
                Target: parseInt(data.Target),
                Token: localStorage.getItem("token")
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                console.log(res.data);
                navigate("/");
            });
    }

    return cat != null ?

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
                Add Idea
            </h1>
            <input className={"DetailsDivContents"}
                   onChange={(e) => handle(e)}
                   id={"Name"}
                   value={data.Name}
                   placeholder={"Name"}
                   type={"text"}
                   style={{width: "250px"}}

            />
            <select className={"DetailsDivContents"}
                    style={{width: "250px"}}
                    onChange={(e) => handle(e)}
                    id={"CategoryId"}
                    value={data.CategoryId}
                    placeholder={"Category"}
            >
                {cat.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
            <input className={"DetailsDivContents"}
                   style={{width: "250px"}}
                   onChange={(e) => handle(e)}
                   id={"Target"}
                   value={data.Target}
                   placeholder={"MoneyTarget"}
                   type={"text"}
            />
            <input className={"DetailsDivContents"}
                   onChange={(e) => handle(e)}
                   id={"ShortDescription"}
                   value={data.ShortDescription}
                   placeholder={"ShortDescription"}
                   type={"text"}
            />
            <textarea
                className={"DetailsDivContents"}
                onChange={(e) => handle(e)}
                id={"Description"}
                value={data.Description}
                placeholder={"Description"}
                type={"text"}
            />


            <button className={"btn btn-info align-self-md-center"} onClick={(e) => submit(e)}
                    style={{width: "100px"}}>Submit
            </button>
        </form>
        :
        <p>Loading...</p>
}
