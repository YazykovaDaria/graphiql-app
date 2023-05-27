import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'src/components/langSwitcher/LangSwitcher';
import { Section } from '../../components/Section/Section';

export function MainPage() {
  const { t } = useTranslation();

  return (
    <Section name='Hello Page'>
      <LangSwitcher />
      <p>{t('main.title')}</p>
      <p>{t('main.test')}</p>
    </Section>
  );
}
