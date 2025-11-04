import React from 'react';
import { toggleTheme, getTheme } from '../../utils/theme-switcher';
import './theme-toggle.css';

export const ThemeToggle: React.FC = () => {
  const [theme, setLocalTheme] = React.useState(getTheme());
  console.log('theme from component', theme);

  React.useEffect(() => {
    // Update theme state when it changes
    const observer = new MutationObserver(() => {
      setLocalTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const handleToggle = React.useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    // Update the theme immediately
    setLocalTheme(nextTheme);
    // Force immediate DOM update
    requestAnimationFrame(() => {
      toggleTheme();
      // Force style recalculation
      document.documentElement.style.setProperty(
        'color',
        'var(--content-primary)'
      );
      document.documentElement.style.setProperty(
        'background-color',
        'var(--background-primary)'
      );
    });
  }, [theme]);

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <svg
          className="theme-toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5.64 5.64a1 1 0 0 1 1.41 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 0-1.41zm12.72 0a1 1 0 0 1 0 1.41l-.71.71a1 1 0 1 1-1.41-1.41l.71-.71a1 1 0 0 1 1.41 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0zm-3 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm15 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM5.64 16.95a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-1.41-1.41l.71-.71zm12.72 0l.71.71a1 1 0 0 1-1.41 1.41l-.71-.71a1 1 0 0 1 1.41-1.41zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" />
        </svg>
      ) : (
        <svg
          className="theme-toggle-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0-.393 15 7.5 7.5 0 0 0 7.92-12.446A9 9 0 1 1 12 3z" />
        </svg>
      )}
    </button>
  );
};
