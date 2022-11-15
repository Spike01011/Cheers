import React, {useState} from 'react';
import axios from "axios";
import {useNavigation} from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js";

const ContinuePaymentComponent = () => {
    const navigate = useNavigation();
    const [data, setData] = useState({
        Total: "",
        TipAmount: "",
        ShortDescription: "",
        CategoryId: "1",
        Target: "",
    });
    const ana = () => {
        console.log("Ana are mere!")
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
        <button
            className="m-auto max-width-360--for-small hide hrt-primary-button hrt-primary-button--green hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
            type="button" data-element-id="btn_continue" onClick={ana}
            data-analytic-event-listener="true">Continue
        </button>
    )
};

export default ContinuePaymentComponent;