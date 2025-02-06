import React from "react";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <h1>Добро пожаловать в Context API Demo</h1>
      <UserProfile />
      <UpdateUser />
    </div>
  );
}

export default App;
