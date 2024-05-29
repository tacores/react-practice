import React from "react";

function FetchUser() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json())
    .then(data => setUser(data))
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h2>Customer data</h2>
      <h3>Name: {user.results[0].name.first}</h3>
      <img src={user.results[0].picture.large} alt="user"></img>
    </div>
  ) : (
    <h2>Data pending...</h2>
  );
}

export default FetchUser;
