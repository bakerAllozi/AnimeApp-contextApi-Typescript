import React from "react";

import Logo from "./Logo.tsx";
import Search from "./Search.tsx";
import WatchList from "./WatchList.tsx";
export default function Navecation() {
  return (
    <div className="Navecation">
      <Logo />
      <Search />
      <WatchList />
    </div>
  );
}
