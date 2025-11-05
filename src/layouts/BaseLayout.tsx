import React from 'react';

type BaseLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const BaseLayout = ({
  children,
  title = 'Quiz App',
}: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-600 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-800/60">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl flex-1 px-4 py-8">{children}</main>

      <footer className="mt-auto border-t border-slate-800/60 bg-slate-800/60">
        <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Quiz App — powodzenia!
        </div>
      </footer>
    </div>
  );
};

export default BaseLayout;
