import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import BackToIdea from "./Components/BackToIdea";
import DonationInput from "./Components/DonationInput";
import DonationPanel from "./Components/DonationPanel";
import TipComponent from "./Components/TipComponent";
import ContinuePaymentComponent from "./Components/ContinuePaymentComponent";


const PaymentComponent = () => {
    const [price, setPrice] = useState([]);
    const [tip, setTip] = useState([]);

    return (
        <div className="parent">
            <div className="div1">
                <div className="checkout-page_checkoutCard__aZ2jW">
                    <BackToIdea/>
                    <div id="campaign-summary" className="campaign-summary_campaignSummary__J0_JY">
                        <div className="core-entity-summary_campaignSummaryImageWrapper__KTBd8">
                            <div className="core-entity-summary_campaignSummaryImage__73KdF"></div>
                        </div>
                        <div className="core-entity-summary_campaignSummaryText__UZNOj">
                            <h1
                                className="mb0 text-regular weight-400">You're supporting <strong>
                                SPORT E SALUTE- coltiviamo campioni</strong>
                            </h1>
                            <h2
                                className="color-gray weight-400 text-small mb0">Your donation will
                                benefit <strong>Filippo Casciaro</strong>
                            </h2>
                        </div>
                    </div>
                    <div className="checkout-form">
                        <form name="ucForm">
                            <div
                                className="checkoutCurrencyField m-form-field m-form-field--stacked mb3x donationAmountField">
                                <div className="m-form-field-inner"><label
                                    className="m-form-field-label m-form-field-label--prepend"
                                    htmlFor="checkout-donation">
                                    <div className="heading-3">Enter your donation</div>
                                </label>
                                    <DonationInput/>
                                </div>
                            </div>
                            <div className="mb3x">
                                <fieldset className="hrt-fieldset">
                                    <legend className="heading-3">Tip Cheers services</legend>
                                    <TipComponent/>
                                </fieldset>
                            </div>
                            <ContinuePaymentComponent/>
                        </form>
                    </div>
                    <div className="gfm-guarantee">
                        <section className="m-value-prop">
                            <div className="m-value-prop-content">
                                <h3 className="heading-3 mb">Cheers protects your donation</h3>
                                <p
                                    className="color-gray mt0 mb0 text-small">We guarantee you a full refund
                                    for up to a year in the rare case that fraud occurs.
                                    <a
                                        className="hrt-link hrt-link--gray-dark"
                                        href="/c/safety/gofundme-guarantee" target="_blank"
                                        rel="noreferrer">See our Cheers Giving Guarantee.
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <DonationPanel/>
        </div>
    )
};

export default PaymentComponent;