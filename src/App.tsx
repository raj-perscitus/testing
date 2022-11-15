import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, UpdatesCard, InteractiveList } from "./components";

function App() {
  return (
    <div className="Apps">
      <Button variant="contained" label="Button">
        Contained
      </Button>
      <UpdatesCard
        // image={logo}
        title="My Notifications"
        Component={() => (
          <>
            <InteractiveList
              link="d"
              onClick={console.log}
              list={[
                {
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
                {
                  label: "Reminder",
                  labelRight: "12:44 PM",
                  description: "Your documents method has been changed.",
                },
              ]}
            />
          </>
        )}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
