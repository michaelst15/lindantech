import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./page/home";
import en from  './en.json'
import id from './id.json'
import { IntlProvider } from "react-intl";
import { LoadingScreen } from "./page/loadingScreen";
import { WeAre } from "./page/we-are";
import { Infrastruktur } from "./page/infrastruktur";

function App() {
  const messages = { en, id };
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState("id"); 

  useEffect(() => {
    // Tampilkan animasi selama 5 detik sebelum berpindah ke Home
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen unmount
  }, []);

  return (
      <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<Home setLocale={setLocale} />} />
            <Route path="/infrastruktur" element={<Infrastruktur setLocale={setLocale} />} />
            <Route path="/we-are" element={<WeAre setLocale={setLocale} />} />
          </Routes>
        )}
      </Router>
      </IntlProvider>
  );
}

export default App;
