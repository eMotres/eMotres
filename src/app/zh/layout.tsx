import ZhLang from './ZhLang';

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ZhLang />
      {children}
    </>
  );
}
