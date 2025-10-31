'use client';

import { useIntlContext } from './IntlProviderWrapper';
import Image from 'next/image';

const HeaderLanguageSwitcher = () => {
  const { locale, setLocale } = useIntlContext();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (

<button
  onClick={toggleLanguage}
  className="
    relative
    w-12 h-12 
    flex items-center justify-center 
    rounded-full 
    border border-gray-300 
    bg-transparent 
    shadow-sm
    hover:bg-gray-200 
    transition-all duration-300
  "
>
  <Image 
    src="/translate.png"  // make sure this is in your public folder
    alt="Translate" 
    width={24} 
    height={24} 
    className="pointer-events-none"
  />
</button>


  );
};

export default HeaderLanguageSwitcher;
