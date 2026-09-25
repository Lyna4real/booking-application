import MainContent from "./mainContent";
import TopBar from "./topBar";
import { useState } from "react";

export default function Admin({ accountClick }) {
  const [search, setSearch] = useState("");
  function inputHandle(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <TopBar accountClick={accountClick} inputHandle={inputHandle} />
      <h1 className="mt-60 text-center text-4xl font-semibold">
        All the bookings
      </h1>
      <div className="flex justify-center items-center">
        <MainContent className="flex-1" search={search} />
      </div>
    </>
  );
}
