import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactGA from "react-ga4";

const ANALYTICS_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxGVYKYJKxeZWhgj7IlgxpbBBOK6DgvO2hLkvX0NkR2qORhyVzURW2hhT4d0bteaDvb/exec";

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

    const onLoadEvent = async () => {
      await fetch(
        `${ANALYTICS_SHEET_URL}?Category=Users&Action=page_visit&Label=visit`,
        {
          method: "GET",
        }
      );
    };
    onLoadEvent();
  }, []);

  const sendEventToSheet = async (
    category: string,
    action: string,
    label: string
  ) => {
    await fetch(
      `${ANALYTICS_SHEET_URL}?Category=${category}&Action=${action}&Label=${label}`,
      {
        method: "GET",
      }
    );
  };

  const event = (category: string, action: string, label: string) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return (
    <div className="App">
      <button onClick={() => sendEventToSheet("Users", "register", "TEST")}>
        Register
      </button>
      <button onClick={() => sendEventToSheet("Users", "login", "TEST")}>
        Login
      </button>
      <button onClick={() => sendEventToSheet("Users", "click", "TEST")}>
        Click
      </button>
    </div>
  );
}

export default App;
