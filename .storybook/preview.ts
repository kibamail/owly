import type { Preview } from '@storybook/react';
import { useEffect } from 'react';
import { initializeTheme } from '../utils/theme-switcher';

import '../styles/index.css';
import '../storybook.css';
import '../styles/themes.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Initialize theme system for each story
    (Story) => {
      useEffect(() => {
        initializeTheme();
      }, []);
      return Story();
    },
  ],
};

export default preview;
