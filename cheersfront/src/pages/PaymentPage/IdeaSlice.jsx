import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    allIdea: [],
    ideaName: '',
    ideaAuthor: '',
    ideaTarget: 0,
};

const ideaSlice = createSlice({
    name: 'idea',
    initialState,
    reducers: {
        setIdeaName: (state, payload) => {
            state.ideaName = payload.payload;
            console.log(payload.payload)

        },
        setIdeaAuthor: (state, payload) => {
            state.ideaAuthor = payload.payload;
            console.log(payload.payload)
        },
        setAllIdea: (state, payload) => {
            console.log(payload.payload)
            state.allIdea = payload;
        },
    }
})

export const {setIdeaName, setIdeaAuthor, setAllIdea} = ideaSlice.actions;

export default ideaSlice.reducer