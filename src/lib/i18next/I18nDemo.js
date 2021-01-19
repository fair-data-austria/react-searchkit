// i18n : https://react.i18next.com/
// npm install react-i18next i18next --save
// if you'd like to detect user language and load translation
// npm install i18next-http-backend i18next-browser-languagedetector --save

//  extraction tool : http://i18next.github.io/i18next-scanner/
//  npm install --save-dev i18next-scanner


import React from 'react';
import { useTranslation } from 'react-i18next';

export function I18nDemo() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Welcome to React')}</h1>
}
