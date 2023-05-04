import flagEn from 'src/assets/img/united-kingdom.png';
import flagRu from 'src/assets/img/russia.png';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, Avatar, SelectChangeEvent } from '@mui/material';

type Locale = {
  img: string;
};

type Locales = Record<string, Locale>;

const locales: Locales = {
  en: { img: flagEn },
  ru: { img: flagRu },
};

export function LangSwitcher() {
  const { i18n } = useTranslation();
  const defaultLang = i18n.resolvedLanguage;

  const switchLang = (e: SelectChangeEvent) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      value={defaultLang}
      onChange={switchLang}
      size='small'
      sx={{
        '& .MuiSelect-select': {
          py: 0,
          px: 1,
        },
      }}
    >
      {Object.keys(locales).map((locale) => (
        <MenuItem value={locale} key={locale}>
          <Avatar
            variant='rounded'
            alt={`flag ${locale}`}
            src={locales[locale].img}
            style={{
              width: 50,
              height: 50,
            }}
          />
        </MenuItem>
      ))}
    </Select>
  );
}
