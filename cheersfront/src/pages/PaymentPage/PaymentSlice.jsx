import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    donation: 0,
    tip: 0,
    total: 0,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        clearData: (state) => {
            state.donation = 0;
            state.tip = 0;
            state.total = 0;
            console.log("Must Be '0'")
            console.log(state.donation + " donation")
            console.log(state.tip + " tip")
            console.log(state.total + " total")
        },
        setDonation: (state, payload) => {
            state.donation = payload.payload;
        },
        selectTip: (state, payload) => {
            state.tip = payload.payload;
        },
        getTotal: (state) => {
            state.total = parseInt(parseInt(state.tip) / 100 * parseInt(state.donation)) + parseInt(state.donation)
        }
    }
})

export const {setDonation, selectTip, getTotal, clearData} = paymentSlice.actions;

export default paymentSlice.reducer