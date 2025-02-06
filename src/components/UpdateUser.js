import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UpdateUser = () => {
  const { setUser } = useContext(UserContext);

  const changeName = () => {
    setUser((prevUser) => ({ ...prevUser, name: "Тимур" }));
  };

  return <button onClick={changeName}>Изменить имя</button>;
};

export default UpdateUser;
