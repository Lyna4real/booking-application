import User from "./user/userInterface";
import Admin from "./admin/adminInterface";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [admin, setAdmin] = useState(false);

  function accountClickUser() {
    setAdmin(true);
  }

  function accountClickAdmin() {
    setAdmin(false);
  }

  return (
    <>
      {admin === false ? (
        <User accountClick={accountClickUser} account={admin}></User>
      ) : (
        <Admin accountClick={accountClickAdmin}></Admin>
      )}
    </>
  );
}
