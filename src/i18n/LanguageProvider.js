import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LanguageProvider = () => {
  const { i18n } = useTranslation();
  const { lang } = useSelector((state) => state.app);

  React.useEffect(() => {
    console.log(lang);
    i18n.changeLanguage(lang);
  }, [lang]);

  return <></>;
};

export default LanguageProvider;
