import React, { useEffect, ChangeEvent } from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {getData} from "../../utils/data.utils";
import {setGames, setSearchField, setSearchResults} from "../../state/actions/gamesAction";
import SearchBox from "../search-box/search-box";
import GamesList from "../games-list/games-list.component";
import '../../App.css';


export type Game = {
    "id": string,
    "slug": string,
    "title": string,
    "providerName": string,
    "startUrl": string | null,
    "thumb": {
        "url": string
    }
}
const GamesPage: React.FC = () => {
    const dispatch = useDispatch();
    const games = useSelector((state: RootState) => state.games.games);
    const searchField = useSelector((state: RootState) => state.games.searchField);
    const searchResults = useSelector((state: RootState) => state.games.searchResults);

    useEffect(() => {
        // Fetch games and update Redux store
        const fetchGames = async () => {
            try {
                const response = await getData<{ games: Game[] }>("http://localhost:8000/api/games");

                if (response && Array.isArray(response.games)) {
                    dispatch(setGames(response.games));
                } else {
                    console.error('Invalid data structure. Expected an object with a "games" array property, but received:', response);
                }
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [dispatch]); // Dependency array is empty to run once on mount

    useEffect(() => {
        // Update search results whenever games or searchField changes
        if (games.length > 0) {
            const newFilteredGames = games.filter((game) => game.title.toLowerCase().includes(searchField.toLowerCase()));
            dispatch(setSearchResults(newFilteredGames));
        }
    }, [games, searchField, dispatch]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const searchFieldString = event.target.value.toLowerCase();
        // Dispatch the setSearchField action to update the Redux store
        dispatch(setSearchField(searchFieldString));
    };


    return (
        <div className="App">
            <header className="App-header">
                <h1>Games</h1>
                <SearchBox
                    onChangeHandler={onSearchChange}
                    placeholder='Search Games'
                    className='search-box'
                />
            </header>
            <main>
                {searchResults.length > 0 ? (
                    <>
                        <GamesList games={searchResults} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </div>
    );
};

export default GamesPage;
