// src/actions/gamesActions.ts
import { createAction } from '@reduxjs/toolkit';
import {Game} from "../../App";

// Create an action to set games
export const setGames = createAction<Game[]>('games/setGames');

export const setSearchField = createAction<string>('games/setSearchField');

export const setSearchResults = createAction<Game[]>('games/setSearchResults');