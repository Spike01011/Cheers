import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentComponent = () => {
    return (
        <div className="parent">
        <div className="div1">
            <div className={"checkout-page_checkoutCard__aZ2jW"}>
                <a className="show-for-large pl hrt-secondary-button hrt-secondary-button--gray hrt-secondary-button--inline hrt-secondary-button--small hrt-base-button"
                   data-element-id="btn_donate_returnCampaign" href="/f/sport-e-salute-coltiviamo-campioni"
                   id="donate-return" data-analytic-event-listener="true">
                    Return to base Idea</a>
                <div id="campaign-summary" className={"campaign-summary_campaignSummary__J0_JY"}>
                    <div>
                        <div>
                            {/*  Aici locuieste Imaginea  */}
                        </div>
                    </div>
                    <div>
                        <h1 className={"mb0 text-regular weight-400"}>You're supporting<strong> SPORT E
                            SALUTE-coltiviamo campioni
                        </strong>
                        </h1>
                        <h2 className={"color-gray weight-400 text-small mb0"}>
                            Your donation will benefit
                            <strong> Filippo Casciaro </strong>
                        </h2>
                    </div>
                </div>
                <div>
                    <form name="ucForm">
                        <div>
                            <div className="m-form-field-inner">
                                <label htmlFor="checkout-donation">
                                    <div className={"heading-3"}>Enter your donation</div>
                                </label>
                                <div
                                    className={"rounded-3x checkout-currency-field_checkoutCurrencyFieldWrapper__wm_mE"}>
                                    <div className={"checkout-currency-field_checkoutCurrencyFieldCurrency__oBZgE"}>
                                            <span
                                                className={"checkout-currency-field_checkoutCurrencyFieldSymbol__AFLut"}>
                                                €
                                            </span>
                                        <span
                                            className={"checkout-currency-field_checkoutCurrencyFieldAbbr__Nf6VO"}>
                                                EUR
                                            </span>
                                    </div>
                                    <input type={"text"} id="checkout-donation" name="donationAmount"
                                           inputMode={"numeric"} maxLength={5}
                                           className={"checkout-currency-field_checkoutCurrencyFieldInput__VE9gc a-text-input"}>
                                    </input>
                                    <span
                                        className={"checkout-currency-field_checkoutCurrencyFieldDecimal__7QS2P"}>.00</span>
                                </div>
                            </div>
                            <div
                                role="alert">
                                <svg aria-hidden="true" className="mr hrt-icon hrt-icon--small"
                                     focusable="false" viewBox="0 0 24 24">
                                    <use
                                        href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#alert"
                                        // xlink:href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#alert"
                                    ></use>
                                </svg>
                                <span>Donation amount must be at least €5.00</span>
                            </div>
                        </div>
                        <div className="mb3x">
                            <fieldset className={"hrt-fieldset"}>
                                <legend className={"heading-3"}>Cheers services</legend>
                                <div>
                                    <span>
                                        <div>
                                            We have pre-set a 10% contribution for Cheers. Your contribution helps us provide a safe and reliable fundraising service.
                                    <strong>
                                        You can select a different percentage from the drop-down menu or eliminate this contribution by clicking on the link below.
                                    </strong>
                                        </div>
                                    </span>
                                    <div className="tip-select_tipSelectTip__dEH0C">
                                        <div className="tip-select_tipSelectTipSelection__ZVNDJ hrt-select-field">
                                            <div className="hrt-select-field-wrapper">
                                                <select aria-invalid="false"
                                                        className="hrt-select-field-select"
                                                        id="donation-tip-option"
                                                        name="tipOption">
                                                    <option value="0">0%</option>
                                                    <option value="7.5">7.5%</option>
                                                    <option value="10">10%</option>
                                                    <option value="12.5">12.5%</option>
                                                    <option value="15">15%</option>
                                                    <option value="-1">Other</option>
                                                </select><label className="hrt-select-field-label"
                                                                htmlFor="donation-tip-option">Tip amount</label>
                                                <svg aria-hidden="true"
                                                     className="hrt-select-field-icon hrt-icon hrt-icon--large"
                                                     focusable="false" viewBox="0 0 24 24">
                                                    <use
                                                        href="/_next/static/images/navigation-icons-d4d68bf240b8378d4436209adbaa5a60.svg#caret-down"></use>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="tip-select_tipRemoveLink__7fpuy text-small color-gray">
                                                Don’t want to leave a contribution?
                                                <button
                                                    className="text-small color-dark-gray hrt-text-button hrt-text-button--gray-dark"
                                                    type="button">REMOVE IT BY CLICKING HERE</button></span></div>
                                </div>
                            </fieldset>
                        </div>
                        <button
                            className={"m-auto max-width-360--for-small hrt-primary-button hrt-primary-button--green hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"}
                            type="button" data-element-id="btn_continue"
                            data-analytic-event-listener="true">Continue
                        </button>
                        <div>
                            <div></div>
                            <div>

                                {/*Aici incepe plata*/}
                                <fieldset>
                                    <legend>Payment method</legend>
                                    <div>
                                        <ul>
                                            <li>
                                                <div
                                                >
                                                    {/*<input id="google-pay"*/}
                                                    {/*       type="radio" name="paymentMethod"*/}
                                                    {/*       value="GOOGLE_PAY">*/}
                                                    {/*    <label*/}

                                                    {/*        htmlFor="google-pay">*/}
                                                    {/*        <div>*/}
                                                    {/*            <svg aria-hidden="true"*/}

                                                    {/*                 focusable="false" viewBox="0 0 24 24">*/}
                                                    {/*                <use*/}
                                                    {/*                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#google-pay"*/}
                                                    {/*                    // xlink:href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#google-pay"*/}
                                                    {/*                ></use>*/}
                                                    {/*            </svg>*/}
                                                    {/*            <span>Google Pay</span></div>*/}
                                                    {/*    </label>*/}
                                                    {/*</input>*/}
                                                </div>
                                            </li>
                                            <li>
                                                <div
                                                >
                                                    {/*<input id="add-card"*/}
                                                    {/*       type="radio" name="paymentMethod"*/}
                                                    {/*       value="CREDIT_CARD">*/}
                                                    {/*    <label*/}

                                                    {/*        htmlFor="add-card">*/}
                                                    {/*        <div>*/}
                                                    {/*            <svg aria-hidden="true"*/}

                                                    {/*                 focusable="false" viewBox="0 0 24 24">*/}
                                                    {/*                <use*/}
                                                    {/*                    href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#card"*/}
                                                    {/*                    // xlink:href="/_next/static/images/payment-icons-90b71b369a5fd4263314f052a14c5dbc.svg#card"*/}
                                                    {/*                ></use>*/}
                                                    {/*            </svg>*/}
                                                    {/*            <span>Credit or debit</span></div>*/}
                                                    {/*    </label>*/}
                                                    {/*</input>*/}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </fieldset>
                                <div></div>
                                <fieldset>
                                    <legend>Donation details (optional)</legend>
                                    <div>
                                        <div>
                                            {/*<div>*/}
                                            {/*    <input type="checkbox">*/}
                                            {/*        <p>*/}
                                            {/*            Don't display my*/}
                                            {/*            name*/}
                                            {/*            publicly on the fundraiser.*/}
                                            {/*        </p>*/}
                                            {/*    </input>*/}
                                            {/*</div>*/}
                                            <div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        aria-label="Questions about donating anonymously?">
                                                        <svg aria-hidden="true"

                                                             focusable="false" viewBox="0 0 24 24">
                                                            <use
                                                                href="/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#info"
                                                                // xlink:href="/_next/static/images/action-icons-9645f6597c00bf86c32ee777223af9ed.svg#info"
                                                            ></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div

                                                    role="status"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                {/*<input type="checkbox"*/}
                                                {/*       id="email-list"*/}
                                                {/*       name="emailOptIn"*/}
                                                {/*       value="">*/}
                                                {/*    <label*/}
                                                {/*        htmlFor="email-list">Get*/}
                                                {/*        occasional marketing updates from GoFundMe. You may*/}
                                                {/*        unsubscribe at any time.*/}
                                                {/*    </label>*/}
                                                {/*</input>*/}
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div>
                                    <h2>Your donation</h2>
                                    <dl>
                                        <dt>Your donation</dt>
                                        <dd>€1.00</dd>
                                        <dt>GoFundMe tip</dt>
                                        <dd>€0.10</dd>
                                        <div>
                                            <div></div>
                                            <dt>Total due today</dt>
                                            <dd>€1.10</dd>
                                        </div>
                                    </dl>
                                    <div></div>
                                </div>
                                <div>
                                    <div>
                                        <div id="threeds-div"></div>
                                        <div>
                                            <button
                                                id="donate-now" type="submit">Donate now
                                            </button>
                                            <p>
                                                <svg aria-hidden="true"
                                                     focusable="false" viewBox="0 0 24 24">
                                                    <use
                                                        href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock"
                                                        // xlink:href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock"
                                                    ></use>
                                                </svg>
                                                <span>Secure donation</span></p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div id="googlepay-container">
                                                            <span><div><button
                                                                type="button" aria-label="Google Pay">
                                                            </button></div></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                        >
                                            <button
                                                id="donate-now" type="submit">Donate now
                                            </button>
                                            <p>
                                                <svg aria-hidden="true"
                                                     focusable="false" viewBox="0 0 24 24">
                                                    <use
                                                        href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock"
                                                        // xlink:href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#lock"
                                                    ></use>
                                                </svg>
                                                <span>Secure donation</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div>By continuing, you agree
                                    with<a
                                        id="link-donate-terms" target="_blank" rel="noreferrer"
                                        href="/c/terms">GoFundMe terms</a> and
                                    <a id="link-donate-privacy"
                                       target="_blank" rel="noreferrer" href="/c/privacy">privacy notice</a>.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div id="checkoutAppInvisibleCaptcha"></div>
                <div></div>
                <div>
                    <section>
                        <div>
                            <svg aria-hidden="true" className="hrt-icon hrt-icon--large" focusable="false"
                                 viewBox="0 0 24 24">
                                <use
                                    href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#guarantee"
                                    // xlink:href="/_next/static/images/information-icons-8e28469525490b24db5532ee63323d3f.svg#guarantee"
                                ></use>
                            </svg>
                        </div>

                        {/*Se termina plata*/}
                        <div>
                            <h3>GoFundMe protects
                                your donation
                            </h3>
                            <p>We guarantee you
                                a full refund for up to a year in the rare case that fraud occurs.
                                <a target="_blank" rel="noreferrer">See our GoFundMe Giving Guarantee.
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div className="div2">
            <div
                className="checkout-summary_checkoutSummary__QVndD show-for-large checkout-summary rounded pt4x pr3x pb4x pl3x">
                <h2>Your donation</h2>
                <dl>
                    <dt>Your donation</dt>
                    <dd>€1.00</dd>
                    <dt>GoFundMe tip</dt>
                    <dd>€0.10</dd>
                    <div>
                        <div></div>
                        <dt>Total due today</dt>
                        <dd>€1.10</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
    )
};

export default PaymentComponent;