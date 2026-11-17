import { useEffect, useState, type ReactNode } from 'react';

type Page = '/' | '/about' | '/services' | '/faq' | '/contact';

let currentPage: Page = (typeof window !== 'undefined' && (window.location.pathname as Page)) || '/';
const listeners = new Set<(page: Page) => void>();

export function navigate(path: Page) {
  if (path === currentPage) return;
  currentPage = path;
  window.history.pushState({}, '', path);
  window.scrollTo({ top: 0, behavior: 'instant' });
  listeners.forEach((fn) => fn(path));
}

export function usePage(): Page {
  const [page, setPage] = useState<Page>(currentPage);

  useEffect(() => {
    const handler = (p: Page) => setPage(p);
    listeners.add(handler);
    const onPop = () => {
      currentPage = (window.location.pathname as Page) || '/';
      setPage(currentPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', onPop);
    return () => {
      listeners.delete(handler);
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  return page;
}

export function Link({
  to,
  children,
  className,
  onClick,
}: {
  to: Page;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
