import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ContinuePaymentComponent = () => {
    return (
        <div>
            <button
                className="m-auto max-width-360--for-small hide hrt-primary-button hrt-primary-button--green hrt-primary-button--full-for-small hrt-primary-button--large hrt-primary-button--shadow hrt-base-button"
                type="button" data-element-id="btn_continue"
                data-analytic-event-listener="true">Continue
            </button>
        </div>
    )
};

export default ContinuePaymentComponent;