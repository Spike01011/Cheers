import React, {useState} from 'react';

const DonationInput = () => {
    const [price, setPrice] = useState(0);

    return (
        <div className="rounded-3x checkout-currency-field_checkoutCurrencyFieldWrapper__wm_mE">
            <div className="checkout-currency-field_checkoutCurrencyFieldCurrency__oBZgE">
                <span className="checkout-currency-field_checkoutCurrencyFieldSymbol__AFLut">
                    €
                </span>
                <span className="checkout-currency-field_checkoutCurrencyFieldAbbr__Nf6VO">
                    EUR
                </span>
            </div>
            <input className="checkout-currency-field_checkoutCurrencyFieldInput__VE9gc"
                   type="tel" id="checkout-donation" name="donationAmount"
                   maxLength={5} inputMode={"numeric"}>
            </input>
            <span className="checkout-currency-field_checkoutCurrencyFieldDecimal__7QS2P">
                .00
            </span>
        </div>
    )
};

export default DonationInput;