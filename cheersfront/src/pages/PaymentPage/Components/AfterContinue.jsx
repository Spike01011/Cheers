import React from 'react';
import CountrySelect from "./CountrySelectionComponent";
import {loadStripe} from "@stripe/stripe-js";


const AfterContinue = () => {
    const stripePromise = loadStripe('pk_test_51M1UwLAWK0lCDMBJ77KNHdxv5tbRNUEGgjRAPfreyd6IITddlX4lwYGEKkQANUIw8XgCjRAvNKoO4j5DzWAflMST00TJAfYe6H');

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
                                <div className="payment-method-option_checkoutPaymentOption__iocS7 hrt-radio-field">
                                    <input className="hrt-radio-field-input" id="add-card" type="radio"
                                           name="paymentMethod" value="CREDIT_CARD">
                                    </input>
                                    <label
                                        className="hrt-radio-field-label" htmlFor="add-card">
                                        <div className="disp-flex align-center">
                                            <svg aria-hidden="true" className="mr2x hrt-icon hrt-icon--xlarge"
                                                 focusable="false" viewBox="0 0 24 24">
                                                <use
                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#card"></use>
                                            </svg>
                                            <span>Credit or debit</span>
                                            <div className="disp-flex flex-child-grow justify-end">
                                                <ul className="hide-for-small-only hide-for-large-only payment-icon-list list-unstyled disp-flex align-center">
                                                    <li className="mr">
                                                        <svg aria-hidden="true"
                                                             className="hrt-icon hrt-icon--xlarge"
                                                             focusable="false" viewBox="0 0 24 24">
                                                            <use
                                                                href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#american-express-disabled"></use>
                                                        </svg>
                                                    </li>
                                                    <li className="mr">
                                                        <svg aria-hidden="true"
                                                             className="hrt-icon hrt-icon--xlarge"
                                                             focusable="false" viewBox="0 0 24 24">
                                                            <use
                                                                href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#discover-disabled"></use>
                                                        </svg>
                                                    </li>
                                                    <li className="mr">
                                                        <svg aria-hidden="true"
                                                             className="hrt-icon hrt-icon--xlarge"
                                                             focusable="false" viewBox="0 0 24 24">
                                                            <use
                                                                href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#mastercard-disabled"></use>
                                                        </svg>
                                                    </li>
                                                    <li className="">
                                                        <svg aria-hidden="true"
                                                             className="hrt-icon hrt-icon--xlarge"
                                                             focusable="false" viewBox="0 0 24 24">
                                                            <use
                                                                href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#visa-disabled"></use>
                                                        </svg>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </label>
                                </div>
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
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="email-address" placeholder=" " name="email"
                                                                    type="email" autoComplete="email" value="">
                                                                </input>
                                                                <label
                                                                    className="hrt-text-field-label"
                                                                    htmlFor="email-address">Email address
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="donation-personal-fields_donationPersonalRow__WilEu donation-personal-fields_donationPersonalRowParent__11L1A">
                                                    <div className="hrt-text-field">
                                                        <div className="hrt-text-field-wrapper">
                                                            <div className="hrt-text-field-inner">
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="first-name" placeholder=" " name="firstName"
                                                                    type="text" autoComplete="given-name" value="">
                                                                </input>
                                                                <label
                                                                    className="hrt-text-field-label"
                                                                    htmlFor="first-name">First
                                                                    name
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hrt-text-field">
                                                        <div className="hrt-text-field-wrapper">
                                                            <div className="hrt-text-field-inner">
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="last-name" placeholder=" " name="lastName"
                                                                    type="text" autoComplete="family-name" value="">
                                                                </input>
                                                                <label
                                                                    className="hrt-text-field-label"
                                                                    htmlFor="last-name">Last
                                                                    name
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hrt-checkbox-field">
                                                <input
                                                    className="hrt-checkbox-field-input" id="use-donor-name"
                                                    type="checkbox"
                                                    name="useDonorName" value="">
                                                </input>
                                                <label
                                                    className="hrt-checkbox-field-label"
                                                    htmlFor="use-donor-name">Use as
                                                    billing name
                                                </label>
                                            </div>
                                            <div className="credit-card-form-fields_creditCardPaymentGridFields__uhBiA">
                                                <div>
                                                    <div className="hrt-text-field">
                                                        <div className="hrt-text-field-wrapper">
                                                            <div className="hrt-text-field-inner">
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="card-number" placeholder=" " name="card.number"
                                                                    type="text" autoComplete="cc-number"
                                                                    inputMode="numeric"
                                                                    value="">
                                                                </input>
                                                                <label className="hrt-text-field-label"
                                                                       htmlFor="card-number">Card
                                                                    number
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className="hide-for-medium-only hide-for-xlarge-only payment-icon-list list-unstyled disp-flex align-center">
                                                        <li className="mr">
                                                            <svg aria-hidden="true"
                                                                 className="hrt-icon hrt-icon--xlarge" focusable="false"
                                                                 viewBox="0 0 24 24">
                                                                <use
                                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#american-express-disabled"></use>
                                                            </svg>
                                                        </li>
                                                        <li className="mr">
                                                            <svg aria-hidden="true"
                                                                 className="hrt-icon hrt-icon--xlarge" focusable="false"
                                                                 viewBox="0 0 24 24">
                                                                <use
                                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#discover-disabled"></use>
                                                            </svg>
                                                        </li>
                                                        <li className="mr">
                                                            <svg aria-hidden="true"
                                                                 className="hrt-icon hrt-icon--xlarge" focusable="false"
                                                                 viewBox="0 0 24 24">
                                                                <use
                                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#mastercard-disabled"></use>
                                                            </svg>
                                                        </li>
                                                        <li className="">
                                                            <svg aria-hidden="true"
                                                                 className="hrt-icon hrt-icon--xlarge" focusable="false"
                                                                 viewBox="0 0 24 24">
                                                                <use
                                                                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#visa-disabled"></use>
                                                            </svg>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="credit-card-form-fields_creditCardPaymentGridRowDateCvv__wAVUY">
                                                    <div className="o-credit-card-payment-date hrt-text-field">
                                                        <div className="hrt-text-field-wrapper">
                                                            <div className="hrt-text-field-inner">
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="card-expiration" placeholder=" "
                                                                    name="card.expirationDate" type="text"
                                                                    autoComplete="cc-exp" inputMode="numeric"
                                                                    maxLength="5"
                                                                    value="">
                                                                </input>
                                                                <label className="hrt-text-field-label"
                                                                       htmlFor="card-expiration">MM/YY
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="o-credit-card-payment-cvv hrt-text-field">
                                                        <div className="hrt-text-field-wrapper">
                                                            <div className="hrt-text-field-inner">
                                                                <input
                                                                    aria-invalid="false"
                                                                    className="hrt-text-field-input"
                                                                    id="card-cvv" placeholder=" " name="card.CVV"
                                                                    type="text" autoComplete="cc-csc"
                                                                    inputMode="numeric"
                                                                    maxLength="4" pattern="[0-9]*" value="">
                                                                </input>
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
                                                        <input aria-invalid="false"
                                                               className="hrt-text-field-input"
                                                               id="card-name"
                                                               placeholder=" "
                                                               name="card.name"
                                                               type="text"
                                                               autoComplete="cc-name"
                                                               value="">
                                                        </input>
                                                        <label
                                                            className="hrt-text-field-label" htmlFor="card-name">Name on
                                                            card
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="short-address-fields_donationLocationFields__7jil6">
                                                <div
                                                    className="short-address-fields_donationLocationRow__IzV76 short-address-fields_donationLocationRowParent____9JH">
                                                    <div className="short-address-fields_donationLocationRow__IzV76">
                                                        <div className="hrt-select-field">
                                                            <CountrySelect/>
                                                        </div>
                                                    </div>
                                                    <div className="short-address-fields_donationLocationRow__IzV76">
                                                        <div className="hrt-text-field">
                                                            <div className="hrt-text-field-wrapper">
                                                                <div className="hrt-text-field-inner">
                                                                    <input
                                                                        aria-invalid="false"
                                                                        className="hrt-text-field-input"
                                                                        id="location-postal-code" placeholder=" "
                                                                        name="postalCode" type="text"
                                                                        value="">
                                                                    </input>
                                                                    <label className="hrt-text-field-label"
                                                                           htmlFor="location-postal-code">Postal
                                                                        code
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
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
                            <button
                                className="credit-card-submit-button_creditCardSubmitButton__dJYeD max-width-360--for-small disp-flex justify-center hrt-primary-button hrt-primary-button--green hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
                                id="donate-now" type="submit">Donate now
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
};

export default AfterContinue;