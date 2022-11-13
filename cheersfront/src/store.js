import {configureStore} from '@reduxjs/toolkit';
import paymentReducer from './pages/PaymentPage/PaymentSlice';

export const store = configureStore({
    reducer: {
        payment: paymentReducer,
    },
});
