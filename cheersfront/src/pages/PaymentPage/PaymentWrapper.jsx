import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import AfterContinue from "./Components/AfterContinue";

const stripePromise = loadStripe("pk_test_51M1UwLAWK0lCDMBJ77KNHdxv5tbRNUEGgjRAPfreyd6IITddlX4lwYGEKkQANUIw8XgCjRAvNKoO4j5DzWAflMST00TJAfYe6H")

export default function PaymentWrapper() {
	return (
		<Elements stripe={stripePromise}>
			<AfterContinue/>
		</Elements>
	)
};
