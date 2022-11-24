import {configureStore} from '@reduxjs/toolkit';
import paymentReducer from './pages/PaymentPage/PaymentSlice';
import ideaReducer from './pages/PaymentPage/IdeaSlice';

export const store = configureStore({
    reducer: {
        payment: paymentReducer,
        idea: ideaReducer,
    },
});
