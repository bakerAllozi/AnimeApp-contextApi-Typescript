import WatchListBody from "./components/WatchListBody.js";
import { AnimeProvider } from "./AnimeContext.js";
import SecondPart from "./components/SecondPart.js";
import FirstPart from "./components/FirstPart.js";

export default function App() {
  return (
    <div className="appFather">
      <AnimeProvider>
        <WatchListBody />
        <FirstPart />
        <SecondPart />
      </AnimeProvider>
    </div>
  );
}
