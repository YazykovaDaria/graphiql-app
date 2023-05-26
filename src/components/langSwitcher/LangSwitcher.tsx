import flagEn from 'src/assets/img/united-kingdom.png';
import flagRu from 'src/assets/img/russia.png';

import { useTranslation } from 'react-i18next';
import { Avatar, IconButton } from '@mui/material';

type Locale = {
  img: string;
};

type Locales = Record<string, Locale>;

export const locales: Locales = {
  en: { img: flagEn },
  ru: { img: flagRu },
};

export function LangSwitcher() {
  const { i18n } = useTranslation();

  let locale = i18n.resolvedLanguage;

  const switchLang = () => {
    locale = locale !== 'en' ? 'en' : 'ru';
    i18n.changeLanguage(locale);
  };

  return (
    <IconButton onClick={switchLang} data-testid='lng-button'>
      <Avatar
        data-testid={`lng-${locale}`}
        variant='rounded'
        alt={`flag ${locale}`}
        src={locales[locale].img}
        sx={{
          width: { xs: '25px', md: '50px' },
          height: { xs: '20px', md: '40px' },
        }}
      />
    </IconButton>
  );
}
