import React, {useEffect, useState} from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import AfterContinue from "./Components/AfterContinue";
import {useSelector} from "react-redux";
import Api from "../../Utils/Api";

const stripePromise = loadStripe("pk_test_51M1UwLAWK0lCDMBJ77KNHdxv5tbRNUEGgjRAPfreyd6IITddlX4lwYGEKkQANUIw8XgCjRAvNKoO4j5DzWAflMST00TJAfYe6H")

export default function PaymentWrapper() {
	const [loading, setLoading] = useState(true);
	const payment = useSelector((store) => store.payment)
	const donationData = {
		"Total": payment.total,
		"TipAmount": payment.tip,
		"PaymentIntentId": "",
		"ClientSecret": ""
	}

	useEffect(() => {
		console.log("payment: " + payment)
		console.log("total: " + payment.total)

		Api.post('order/addorder', donationData,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
		).then(
			Api.get("payment/payidea")
				.then(response => console.log(response))
				.catch(error => console.log("Payment Fetch Error: " + error))
		)
			.catch(error => console.log("OverAll Error" + error))
			.finally(setLoading(false))

	},[])

	if (loading) return <p>Ana are mere ce se incarca!</p>

	return (
		<Elements stripe={stripePromise}>
			<AfterContinue/>
		</Elements>
	)
};
