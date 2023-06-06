import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;

  const switchLang = () => {
    i18n.changeLanguage(locale !== 'en' ? 'en' : 'ru');
  };

  return (
    <IconButton
      onClick={switchLang}
      sx={{ width: 40, height: 40, fontSize: '0.875rem', textTransform: 'uppercase' }}
    >
      {locale}
    </IconButton>
  );
}
