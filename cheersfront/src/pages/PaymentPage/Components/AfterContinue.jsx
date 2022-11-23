import React, {forwardRef, useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import {CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {StripeInput} from "../StripeInput";
import Api from "../../../Utils/Api";
import {Link, useNavigate} from "react-router-dom";

const AfterContinue = forwardRef((props, ref) => {
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate()
	const [nameOnCard, setNameOnCard] = useState("Anon")
	const [clientSecret, setClientSecret] = useState("")

	useEffect(() => {
		//todo
		const get = async () => {
			try {
				const response = Api.get('order/GetLastOrderClientSecret')
				const responseData = await response.data;
				setClientSecret(responseData);
			} catch (e) {
				console.error(e);
			}
		};
	}, []);

	const submit = async () => {
		if (!stripe) return; // stripe is not ready
		const response = Api.get('order/GetLastOrderClientSecret')
		let data = await (await response).data
		try {
			const cardElement = elements.getElement(CardNumberElement);
			const paymentResult = await stripe.confirmCardPayment(data, {
				payment_method: {
					card: cardElement,
					billing_details: {
						name: nameOnCard
					}
				}
			})
			console.log(paymentResult);
			console.log(paymentResult.paymentIntent.status);
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	};

	function handle(e) {
		e.preventDefault()
		setNameOnCard(e.target.value);
	}

	return (
		<div className="">
			<div className="mb4x mt4x hrt-rule hrt-rule--horizontal"></div>
			<div className="checkout-payment-options">
				<fieldset className="hrt-fieldset">
					<legend className="heading-3">Payment method</legend>
					<div className="mt2x">
						<ul className="checkout-form-fields_checkoutPaymentOptions__9pBu5 rounded list-unstyled">
							<li className="payment-method-option_checkoutPaymentItem__wvNPO">
								<fieldset
									className="credit-card-form-fields mt ml4x credit-card-form-fields_creditCardPaymentHideLegend__pk4_0 hrt-fieldset">
									<legend className="heading-3">
										<div className="disp-flex justify-between align-center"><span>Use credit or debit card</span>
											<ul className="hide-for-small-only hide-for-large-only payment-icon-list list-unstyled disp-flex align-center">
												<li className="mr">
													<svg aria-hidden="true" className="hrt-icon hrt-icon--xlarge"
														 focusable="false" viewBox="0 0 24 24">
														<use
															href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#american-express-disabled"></use>
													</svg>
												</li>
												<li className="mr">
													<svg aria-hidden="true" className="hrt-icon hrt-icon--xlarge"
														 focusable="false" viewBox="0 0 24 24">
														<use
															href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#discover-disabled"></use>
													</svg>
												</li>
												<li className="mr">
													<svg aria-hidden="true" className="hrt-icon hrt-icon--xlarge"
														 focusable="false" viewBox="0 0 24 24">
														<use
															href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#mastercard-disabled"></use>
													</svg>
												</li>
												<li className="">
													<svg aria-hidden="true" className="hrt-icon hrt-icon--xlarge"
														 focusable="false" viewBox="0 0 24 24">
														<use
															href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#visa-disabled"></use>
													</svg>
												</li>
											</ul>
										</div>
									</legend>
									<div className="mt2x">
										<div className="credit-card-form-fields_creditCardGridFields__yOLLh">
											<div className="donation-personal-fields_donationPersonalFields__9fzEO">
												<div
													className="donation-personal-fields_donationPersonalRow__WilEu donation-personal-fields_donationPersonalRowParent__11L1A">
													<div className="hrt-text-field">
														<div className="hrt-text-field-wrapper">
															<div className="hrt-text-field-inner">
																<TextField
																	variant={'standard'}
																	aria-invalid="false"
																	className="hrt-text-field-input"
																	id="email-address" name="email"
																	type="email" autoComplete="email"
																	InputLabelProps={{shrink: true}}
																	InputProps={{disableUnderline: true}}
																/>
																<label
																	className="hrt-text-field-label"
																	htmlFor="email-address">Email address
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												className="credit-card-form-fields_creditCardPaymentGridFields__uhBiA">
												<div>
													<div className="hrt-text-field">
														<div className="hrt-text-field-wrapper">
															<div className="hrt-text-field-inner">
																<TextField ref={ref}
																		   variant={'standard'}
																		   aria-invalid={false}
																		   className="hrt-text-field-input"
																		   name="CardNumberElement"
																		   id={"CardNumberElement"}
																		   type="text" autoComplete={false}
																		   InputLabelProps={{shrink: true}}
																		   InputProps={{
																			   inputComponent: StripeInput,
																			   inputProps: {
																				   component: CardNumberElement
																			   },
																			   disableUnderline: true,
																		   }}


																>
																</TextField>
																<label className="hrt-text-field-label"
																	   htmlFor="card-number">Card
																	number
																</label>
															</div>
														</div>
													</div>
												</div>
												<div
													className="credit-card-form-fields_creditCardPaymentGridRowDateCvv__wAVUY">
													<div className="o-credit-card-payment-date hrt-text-field">
														<div className="hrt-text-field-wrapper">
															<div className="hrt-text-field-inner">
																<CardExpiryElement
																	variant={'standard'}
																	aria-invalid="false"
																	className="hrt-text-field-input"
																	id={"CardExpiryElement"}
																	name="card.expirationDate" type="text"
																	autoComplete="cc-exp" inputMode="numeric"
																	maxLength="5"
																	InputProps={{
																		inputComponent: StripeInput,
																		inputProps: {
																			component: CardExpiryElement
																		},
																		disableUnderline: true
																	}}
																>
																</CardExpiryElement>
																<label className="hrt-text-field-label"
																	   htmlFor="card-expiration">MM/YY
																</label>
															</div>
														</div>
													</div>
													<div className="o-credit-card-payment-cvv hrt-text-field">
														<div className="hrt-text-field-wrapper">
															<div className="hrt-text-field-inner">
																<CardCvcElement
																	variant={'standard'}
																	aria-invalid="false"
																	className="hrt-text-field-input"
																	id="CardCvcElement" placeholder=" "
																	name="card.CVV"
																	type="text" autoComplete="cc-csc"
																	InputProps={{
																		inputComponent: StripeInput,
																		inputProps: {
																			component: CardCvcElement
																		},
																		disableUnderline: true
																	}}
																>
																</CardCvcElement>
																<label
																	className="hrt-text-field-label"
																	htmlFor="card-cvv">CVV
																</label>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="o-credit-card-payment-name hrt-text-field">
												<div className="hrt-text-field-wrapper">
													<div className="hrt-text-field-inner">
														<input aria-invalid="false" onChange={handle}
															   className="hrt-text-field-input"
															   id="card-name"
															   placeholder=" "
															   name="card.name"
															   type="text"
															   autoComplete="cc-name"
														>
														</input>
														<label
															className="hrt-text-field-label" htmlFor="card-name">Name
															on
															card
														</label>
													</div>
												</div>
											</div>
											<div className="short-address-fields_donationLocationFields__7jil6">
												<div
													className="short-address-fields_donationLocationRow__IzV76 short-address-fields_donationLocationRowParent____9JH">
													<div
														className="short-address-fields_donationLocationRow__IzV76">
														<div className="hrt-select-field"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</fieldset>
							</li>
						</ul>
					</div>
				</fieldset>
				<div className="mb4x mt4x hrt-rule hrt-rule--horizontal"></div>
				<fieldset className="hrt-fieldset">
					<legend className="heading-3">Donation details (optional)
					</legend>
					<div className="mt2x">
						<div className="disp-flex align-center">
							<div className="hrt-checkbox-field">
								<input
									type="checkbox"
									className="hrt-checkbox-field-input"
									id="checkout-optional-anonymous"
									name="checkoutPersonalAnonymous">
								</input>
								<label
									className="hrt-checkbox-field-label"
									htmlFor="checkout-optional-anonymous">Don't
									display
									my name publicly on the fundraiser.
								</label>
							</div>
							<div className="hrt-tooltip">
								<div className="hrt-tooltip-button">
									<button
										className="color-blue hrt-tertiary-icon-button hrt-tertiary-icon-button--medium hrt-base-button"
										type="button"
										aria-label="Questions about donating anonymously?">
										<svg aria-hidden="true"
											 className="hrt-icon hrt-icon--large"
											 focusable="false" viewBox="0 0 24 24">
											<use
												href="/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#info">
											</use>
										</svg>
									</button>
								</div>
								<div
									className="hrt-tooltip-bubble hrt-tooltip-bubble--top hrt-tooltip-bubble--center"
									role="status"></div>
							</div>
						</div>
						<div className="mt">
							<div className="hrt-checkbox-field">
								<input
									type="checkbox"
									className="hrt-checkbox-field-input"
									id="email-list" name="emailOptIn">
								</input>
								<label
									className="hrt-checkbox-field-label"
									htmlFor="email-list">Get occasional
									marketing
									updates from Cheers. You may unsubscribe
									at any
									time.
								</label>
							</div>
						</div>
					</div>
				</fieldset>
				<div
					className="payment-method-submit-button_paymentMethodSubmitButton__wHJdV">
					<div className="hide width-full">
						<div id="threeds-div"></div>
						<div
							className="credit-card-submit-button_creditCardSubmitButtonWrapper__1_7UT width-full">
							todo
							<button type={'button'} onClick={submit}
								  className="credit-card-submit-button_creditCardSubmitButton__dJYeD
								   max-width-360--for-small disp-flex justify-center hrt-primary-button
								   hrt-primary-button--green hrt-primary-button--full-for-small
								   hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
								  id="donate-now">Donate now
							</button>
						</div>
					</div>
					<div className="width-full">
						<div
							className="adyen-google-pay_adyenGooglePayButtonWrapper__aF3N3 width-full">
							<div id="googlepay-container"
								 className="adyen-google-pay_adyenGooglePayButton__OuwIC">
								<span className="adyen-checkout__paywithgoogle">
									<div>
										<button
											type="button" aria-label="Google Pay"
											className="gpay-button black plain short en">
										</button>
									</div>
								</span>
							</div>
						</div>
					</div>
					<div className="hide width-full">
						<div
							className="credit-card-submit-button_creditCardSubmitButtonWrapper__1_7UT">
							<p className="mb0 color-gray text-small">
								<svg aria-hidden="true"
									 className="mr hrt-icon hrt-icon--small"
									 focusable="false" viewBox="0 0 24 24">
									<use
										href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock">
									</use>
								</svg>
								<span>Secure donation</span>
							</p>
						</div>
					</div>
				</div>
				<div className="text-small color-gray mt3x mb0">By continuing, you
					agree with <a className="hrt-link hrt-link--gray-dark"
								  id="link-donate-terms" target="_blank"
								  rel="noreferrer" href="/c/terms">Cheers
						terms</a> and <a
						className="hrt-link hrt-link--gray-dark"
						id="link-donate-privacy" target="_blank" rel="noreferrer"
						href="/c/privacy">privacy notice</a>.
				</div>
			</div>
		</div>
	)
});

export default AfterContinue;