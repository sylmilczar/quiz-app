import { Outlet } from 'react-router-dom';

type BaseLayoutProps = {
  title?: string;
};

export const BaseLayout = ({ title = 'CosmicQuiz' }: BaseLayoutProps) => {
  return (
    <div className="bg-primary-600 flex min-h-screen flex-col text-slate-100">
      <header className="from-secondary-900 to-secondary-800 bg-gradient-to-r p-1">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <div className="flex items-center gap-3">
            <img alt="logo" className="size-20" src="/cosmic_icon.svg" />
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl flex-1 sm:px-4 sm:py-8">
        <Outlet />
      </main>

      <footer className="bg-secondary-800 mt-auto">
        <div className="text-secondary-50 mx-auto flex max-w-5xl justify-between p-2 text-sm">
          <span>&copy; {new Date().getFullYear()} CosmicQuiz</span>
          <span>v.X.X.X</span>
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
