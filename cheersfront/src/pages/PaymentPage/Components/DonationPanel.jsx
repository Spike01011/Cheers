import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const DonationPanel = () => {
    const [price, setPrice] = useState([]);
    const [tip, setTip] = useState([]);

    return (
        <div className="div2">
            <aside
                className="checkout-summary_checkoutSummary__QVndD show-for-large checkout-summary rounded pt4x pr3x pb4x pl3x">
                <h2 className="heading-3">Donation overview</h2>
                <dl className="color-gray mt0 mr0 mb0 ml0">
                    <dt>Your donation</dt>
                    <dd>€0.00</dd>
                    <dt>Cheers tip</dt>
                    <dd>€0.00</dd>
                    <div>
                        <div className="hrt-rule hrt-rule--horizontal"></div>
                        <dt className="color-dark-gray">Total due today</dt>
                        <dd className="color-dark-gray">€0.00</dd>
                    </div>
                </dl>
            </aside>
        </div>
    )
};

export default DonationPanel;