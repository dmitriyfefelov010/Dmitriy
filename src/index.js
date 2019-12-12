import React from "react";
import ReactDOM from "react-dom";
import Button from "/src/Button.js";
import "/src/styles.css";

function App() {
  return (
    <div className="App">
      <div>Информация о 10 пользователях</div>
      <Button label="Получить" onClick={() => getUsers()} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

async function getUsers() {
  let url =
    "https://randomuser.me/api/1.3/?results=10&inc=gender,name,location,email,dob,phone,picture";
  let response = await fetch(url);
  let json = await response.json();
  let results = json.results;
  return results;
}
