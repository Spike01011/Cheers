import React, {useEffect, useState} from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import AfterContinue from "./Components/AfterContinue";
import {useSelector} from "react-redux";
import Api from "../../Utils/Api";
// import {CardElement} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51M1UwLAWK0lCDMBJ77KNHdxv5tbRNUEGgjRAPfreyd6IITddlX4lwYGEKkQANUIw8XgCjRAvNKoO4j5DzWAflMST00TJAfYe6H")

export default function PaymentWrapper() {
	const [loading, setLoading] = useState(true);
	const payment = useSelector((store) => store.payment)
	const ana = {
		"Total": payment.total,
		"TipAmount": payment.tip,
		"PaymentIntentId": "",
		"ClientSecret": ""
	}

	useEffect(() => {
		console.log("payment: " + payment)
		console.log("total: " + payment.total)
		Api.post('payment/PayIdea', ana).then(lala => console.log(lala))
			.catch(error => console.log(error)).finally(setLoading(false))
	}, [])

	if (loading) return <p>Ana are mere ce se incarca!</p>

	return (
		<Elements stripe={stripePromise}>
			<AfterContinue/>
		</Elements>
	)
};
