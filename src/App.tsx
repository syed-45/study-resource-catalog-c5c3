import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { initialiseAppState } from "./utils/initialiseAppState";
import { IAppState } from "./utils/interfaces";
import { useState } from "react";
import { Main } from "./components/Main";

function App(): JSX.Element {
  const [appState, setAppState] = useState<IAppState>(initialiseAppState());

  return (
    <>
      <Header appState={appState} setAppState={setAppState} />
      <Main appState={appState} setAppState={setAppState} />
      <Footer />
    </>
  );
}

export default App;
