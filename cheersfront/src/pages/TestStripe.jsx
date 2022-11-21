
import {useEffect, useState} from "react";
import {useStripe, useElements} from "@stripe/react-stripe-js";
import {PaymentElement} from "@stripe/react-stripe-js";

export default function TestStripe(){
	const [message, setMessage] = useState(null)
	const [processing, setProcessing] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
	}

	return(
		<form id={'payment-form'}>
			<PaymentElement/>
			<button disabled={processing} id={'submit'}>
				<span id={'button-text'}>{processing ? "Processing... :" : "Pay Now"}</span>
			</button>
		</form>
	)
}