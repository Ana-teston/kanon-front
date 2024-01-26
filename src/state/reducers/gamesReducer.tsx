// src/reducers/gamesReducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { setGames, setSearchField, setSearchResults } from '../actions/gamesAction';
import {Game} from "../../App";

interface GamesState {
    games: Game[]; // Correctly typed as an array of games
    searchField: string;
    searchResults: Game[];
}

const initialState: GamesState = {
    games: [], // your initial state
    searchField: '',
    searchResults: [],
};

const gamesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setGames, (state, action) => {
            state.games = action.payload;
        })
        .addCase(setSearchField, (state, action) => {
            state.searchField = action.payload;
        })
        .addCase(setSearchResults, (state, action) => {
            state.searchResults = action.payload;
        });
});

export default gamesReducer;
