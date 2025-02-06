import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default UserProfile;
