import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/dist/locale-data/zh";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.scss";
import messages_en from "./translations/en.json";
import messages_zh from "./translations/zh.json";
import "./assets/fontello/css/fontello.css";

const messages = {
  en: messages_en,
  zh: messages_zh,
};
const language = navigator.language.split(/[-_]/)[0];

export default function App() {
  return (
    <div className="content">
      <IntlProvider locale={language} messages={messages[language]}>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  );
}
