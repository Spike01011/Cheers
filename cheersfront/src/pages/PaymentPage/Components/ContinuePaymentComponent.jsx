import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Api from "../../../Utils/Api";
import {clearPaymentData} from "../PaymentSlice";

const ContinuePaymentComponent = () => {
	const donation = useSelector((store) => store.payment.donation)
	const payment = useSelector((store) => store.payment)
	const dispatch = useDispatch();
	const donationData = {
		"Total": payment.total * 100, "TipAmount": payment.tip, "PaymentIntentId": "", "ClientSecret": ""
	}

	function submit() {
		Api.post('payment/PayIdeaAna', donationData, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		}).finally(dispatch(clearPaymentData()))
	}

	function donationButtonToggle() {
		if (donation === 0 || donation === null || isNaN(donation) || donation === "" || payment.total === 0) {
			return 'none';
		} else {
			return ''
		}
	}

	return (
		<Link as={Link} type={'button'} to={'/afterContinue'}
			  style={{pointerEvents: donationButtonToggle()}}
			  onClick={submit}
			  className="m-auto max-width-360--for-small hide hrt-primary-button hrt-primary-button--green
			  	hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
			  data-element-id="btn_continue">Continue
		</Link>)
};

export default ContinuePaymentComponent;