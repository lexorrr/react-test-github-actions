import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactGA from "react-ga4";
function App() {
  useEffect(() => {
    ReactGA.initialize("G-FVMPNM7JY3", {
      gaOptions: {
        debug_mode: true,
      },
    });
    ReactGA.send("pageview");
    // ReactGA.send({ hitType: "pageview", page: "/" });

    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const event = (category: string, action: string, label: string) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return (
    <div className="App">
      <button onClick={() => event("Users", "REGISTER", "TEST")}>
        Register
      </button>
      <button onClick={() => event("Users", "LOGIN", "TEST")}>Login</button>
      <button onClick={() => event("Users", "CLICK", "TEST")}>Click</button>
    </div>
  );
}

export default App;
