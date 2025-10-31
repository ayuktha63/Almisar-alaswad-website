'use client';

import { useState, useEffect, ReactNode, createContext, useContext } from "react";
import { IntlProvider } from "react-intl";
import enMessages from "../../messages/en.json";
import arMessages from "../../messages/ar.json";

interface Props {
  children: ReactNode;
}

interface IntlContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const messagesMap: Record<string, Record<string, string>> = {
  en: enMessages,
  ar: arMessages,
};

const supportedLocales = ["en", "ar"];

const IntlContext = createContext<IntlContextType | undefined>(undefined);

export const useIntlContext = () => {
  const context = useContext(IntlContext);
  if (!context) throw new Error("useIntlContext must be used inside IntlProviderWrapper");
  return context;
};

export default function IntlProviderWrapper({ children }: Props) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<Record<string, string>>(enMessages);

  useEffect(() => {
    const userLang = navigator.language.split("-")[0]; // "en" or "ar"
    if (supportedLocales.includes(userLang)) setLocale(userLang);
  }, []);

  useEffect(() => {
    setMessages(messagesMap[locale]);
  }, [locale]);

  return (
    <IntlContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages} defaultLocale="en">
        {children}
      </IntlProvider>
    </IntlContext.Provider>
  );
}
