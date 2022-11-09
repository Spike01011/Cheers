import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const AfterContinue = () => {
    return (
        <div className="">
            <div className="mb4x mt4x hrt-rule hrt-rule--horizontal"></div>
            <div className="checkout-payment-options">
                <fieldset className="hrt-fieldset">
                    <legend className="heading-3">Payment method</legend>
                    <div className="mt2x">
                        <ul className="checkout-form-fields_checkoutPaymentOptions__9pBu5 rounded list-unstyled">
                            <li className="payment-method-option_checkoutPaymentItem__wvNPO">
                                <div
                                    className="payment-method-option_checkoutPaymentOption__iocS7 hrt-radio-field">
                                    <input className="hrt-radio-field-input"
                                           id="google-pay" type="radio"
                                           name="paymentMethod"
                                           value="GOOGLE_PAY">
                                    </input>
                                    <label
                                        className="hrt-radio-field-label"
                                        htmlFor="google-pay">
                                        <div className="disp-flex align-center">
                                            <svg aria-hidden="true"
                                                 className="mr2x hrt-icon hrt-icon--xlarge"
                                                 focusable="false"
                                                 viewBox="0 0 24 24">
                                                <use
                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#google-pay">
                                                </use>
                                            </svg>
                                            <span>Google Pay</span>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className="payment-method-option_checkoutPaymentItem__wvNPO">
                                <div
                                    className="payment-method-option_checkoutPaymentOption__iocS7 hrt-radio-field">
                                    <input className="hrt-radio-field-input"
                                           id="add-card" type="radio"
                                           name="paymentMethod" value="CREDIT_CARD">
                                    </input>
                                    <label
                                        className="hrt-radio-field-label"
                                        htmlFor="add-card">
                                        <div className="disp-flex align-center">
                                            <svg aria-hidden="true"
                                                 className="mr2x hrt-icon hrt-icon--xlarge"
                                                 focusable="false"
                                                 viewBox="0 0 24 24">
                                                <use
                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#card">

                                                </use>
                                            </svg>
                                            <span>Credit or debit</span></div>
                                    </label>
                                </div>
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
                                    name="checkoutPersonalAnonymous" value="">
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
                                    id="email-list" name="emailOptIn" value="">
                                </input>
                                <label
                                    className="hrt-checkbox-field-label"
                                    htmlFor="email-list">Get occasional
                                    marketing
                                    updates from GoFundMe. You may unsubscribe
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
                            <button
                                className="credit-card-submit-button_creditCardSubmitButton__dJYeD max-width-360--for-small disp-flex justify-center hrt-primary-button hrt-primary-button--green hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
                                id="donate-now" type="submit">Donate now
                            </button>
                            <p className="mb0 color-gray text-small">
                                <svg aria-hidden="true"
                                     className="mr hrt-icon hrt-icon--small"
                                     focusable="false" viewBox="0 0 24 24">
                                    <use
                                        href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock">

                                    </use>
                                </svg>
                                <span>Secure donation</span></p>
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
                                <span>Secure donation</span></p>
                        </div>
                    </div>
                </div>
                <div className="text-small color-gray mt3x mb0">By continuing, you
                    agree with <a className="hrt-link hrt-link--gray-dark"
                                  id="link-donate-terms" target="_blank"
                                  rel="noreferrer" href="/c/terms">GoFundMe
                        terms</a> and <a
                        className="hrt-link hrt-link--gray-dark"
                        id="link-donate-privacy" target="_blank" rel="noreferrer"
                        href="/c/privacy">privacy notice</a>.
                </div>
            </div>
        </div>
    )
};

export default AfterContinue;