import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import GamesPage from "./components/games-page/games-page.component";
import Navigation from "./routes/Navigation";
import SlotMachineComponent from "./components/slot-machine/slot-machine.component";

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
const App: React.FC = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<GamesPage />} />
                <Route path="/slot-machine" element={<SlotMachineComponent />} />
            </Routes>
        </>
    );
};

export default App;
