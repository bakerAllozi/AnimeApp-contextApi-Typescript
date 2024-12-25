import WatchListBody from "./components/WatchListBody.tsx";
import FirstPart from "./components/FirstPart.tsx";
import SecondPart from "./components/SecondPart.tsx";
import { AnimeProvider } from "./AnimeContext.tsx";
import React from "react";

export default function App() {
  return (
    <div className="appFather " style={{ color: "white" }}>
      <AnimeProvider>
        <WatchListBody />
        <FirstPart />
        <SecondPart />
      </AnimeProvider>
    </div>
  );
}
