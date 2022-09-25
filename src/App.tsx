import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { initialiseAppState } from "./utils/initialiseAppState";
import "./App.css";

function App(): JSX.Element {
  const [appState, setAppState] = useState(initialiseAppState());
  return (
    <>
      <BrowserRouter>
        <Header appState={appState} setAppState={setAppState} />
        <Main appState={appState} setAppState={setAppState} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
