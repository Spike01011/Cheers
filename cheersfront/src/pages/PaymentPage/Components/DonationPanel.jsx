import React from 'react';
import {useSelector} from "react-redux";

const DonationPanel = () => {
    const payment = useSelector((store) => store.payment)

    return (<div className="div2">
        <aside
            className="checkout-summary_checkoutSummary__QVndD show-for-large checkout-summary rounded pt4x pr3x pb4x pl3x">
            <h2 className="heading-3">Donation overview</h2>
            <dl className="color-gray mt0 mr0 mb0 ml0">
                <dt>Your donation</dt>
                <dd>€{payment.donation}.00</dd>
                <dt>Cheers tip</dt>
                <dd>{isNaN(payment.tip) ? '0' : payment.tip}.00 %</dd>
                {/*de ce nu merge?*/}
                <div>
                    <div className="hrt-rule hrt-rule--horizontal"></div>
                    <dt className="color-dark-gray">Total due today</dt>
                    <dd className="color-dark-gray">€{payment.total}.00</dd>
                </div>
            </dl>
        </aside>
    </div>)
};

export default DonationPanel;