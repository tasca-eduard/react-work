import "./scss/main.scss"
import React, { useContext } from 'react';
import Header from './components/Header/Header';
import ThemeContext from './context/ThemeContext';
import Hero from "./components/Hero/Hero";
import Articles from "./components/Articles/Articles";
import Statistics from "./components/Statistics/Statistics";

const App: React.FC = () => {
  const {
    theme,
    accent
  } = useContext(ThemeContext);

  return (
    <div className={[
      "App",
      theme,
      accent
    ].join(" ")}>
      <Header />
      <Hero />
      <Articles />
      <Statistics />
    </div>
  );
}

export default App;
