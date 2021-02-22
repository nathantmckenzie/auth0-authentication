import "./App.css";
import LoginButton from "./components/LogininButton";
import LogoutButton from "./components/LogoutButton";
import Question from "./pages/Question";
import ResultsPage from "./pages/ResultsPage";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("FINISH THE TEST");

  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Question result={result} setResult={setResult} />
      <ResultsPage result={result} />
    </>
  );
}

export default App;
