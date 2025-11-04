import type { Preview } from '@storybook/react';
import React, { useEffect, useReducer } from 'react';
import { initializeTheme } from '../utils/theme-switcher';

import '../styles/themes.css';
import '../styles/index.css';
import '../storybook.css';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    initializeTheme();

    const observer = new MutationObserver(() => {
      forceUpdate();

      requestAnimationFrame(() => {
        const currentTheme =
          document.documentElement.getAttribute('data-theme') || 'light';
        document.documentElement.style.setProperty(
          'color-scheme',
          currentTheme
        );
        if (document.body) {
          document.body.style.setProperty(
            'background-color',
            'var(--background-primary)'
          );
          document.body.style.setProperty('color', 'var(--content-primary)');

          const root = document.documentElement;
          root.style.setProperty('--force-repaint', '0');
          void root.offsetHeight;
          root.style.removeProperty('--force-repaint');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: 'var(--background-primary)',
        color: 'var(--content-primary)',
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      {children}
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
  },
  decorators: [(Story) => <ThemeWrapper>{Story()}</ThemeWrapper>],
};

export default preview;
