import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'src/components/LangSwitcher';

// it's just example, delete it if you need
export function MainPage() {
  const { t } = useTranslation();
  return (
    <div>
      <LangSwitcher />
      <p>{t('main.title')}</p>
      <p>{t('main.test')}</p>
      <p>Main page</p>
    </div>
  );
}
