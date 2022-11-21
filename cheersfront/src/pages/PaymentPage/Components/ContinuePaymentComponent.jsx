import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Api from "../../../Utils/Api";

const ContinuePaymentComponent = () => {
	const donation = useSelector((store) => store.payment.donation)
	const payment = useSelector((store) => store.payment)
	const donationData = {
		"Total": payment.total,
		"TipAmount": payment.tip,
		"PaymentIntentId": "",
		"ClientSecret": ""
	}


	function submit() {
		Api.post
		('payment/PayIdeaAna', donationData,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
		).then(response => console.log(response))
	}


	// function submit() {
	// 	Api.post
	// 	('order/addorder', donationData,
	// 		{
	// 			headers: {
	// 				Authorization: `Bearer ${localStorage.getItem("token")}`
	// 			}
	// 		}
	// 	)
	// 		.then(response => console.log({response} + "Starting to create Payment Intent"))
	// 		.then(Api.get("payment/payidea")
	// 			.then(response => console.log({response} + " PayIdea Response"))
	// 			.catch(error => console.log("Payment Fetch Error: " + error))
	// 		)
	// 		.catch(error => console.log("OverAll Error" + error))
	// 		.finally(console.log({donationData}))
	//
	// }

	function donationButtonToggle() {
		if (donation === 0 || donation === null || isNaN(donation)) {
			console.log("Must be none")
			return 'none';
		} else {
			// console.log("Must be empty")
			return ''
		}
	}


	return (
		<>
			<Link as={Link} type={'button'} to={'/afterContinue'}
				// style={{pointerEvents: donation === 0 ? 'none' : ''}}
				  style={{pointerEvents: donationButtonToggle()}}
				  onClick={submit}
				  className="m-auto max-width-360--for-small hide hrt-primary-button hrt-primary-button--green
			  hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
				  data-element-id="btn_continue"
				  data-analytic-event-listener="true">Continue
			</Link>
		</>
	)
};

export default ContinuePaymentComponent;