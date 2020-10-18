/* eslint-disable camelcase */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/zh';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ChatApp from './awesome-chat-app/ChatApp';
import messages_en from './translations/en.json';
import messages_zh_cn from './translations/zh-cn.json';
import messages_zh_tw from './translations/zh-tw.json';
import './App.scss';
import './assets/fontello/css/fontello.css';

const supportedLocales = ['en', 'zh-CN', 'zh-TW'];
const supportedMessages = {
  en: messages_en,
  'zh-CN': messages_zh_cn,
  'zh-TW': messages_zh_tw,
};
let language = navigator.language.split(/[-_]/)[0];
const country = navigator.language.split(/[-_]/)[1];
if (language === 'zh') {
  if (country === 'TW' || country === 'HK') {
    language = 'zh-TW';
  } else {
    language = 'zh-CN';
  }
}
language = supportedLocales.includes(language) ? language : 'en';

export default function App() {
  const [locale, setLocale] = useState(language);
  const [messages, setMessages] = useState(supportedMessages[language]);

  const onChangeLanguage = (lang) => {
    setLocale(lang);
    setMessages(supportedMessages[lang]);
  };

  return (
    <div className="content">
      <IntlProvider locale={locale} messages={messages}>
        <NavBar language={locale} onChangeLanguage={onChangeLanguage} />
        <Router>
          <Switch>
            <Route path="/chat_app" component={ChatApp} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </IntlProvider>
    </div>
  );
}
