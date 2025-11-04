import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemeToggle } from './theme-toggle';

const meta = {
  title: 'Theme/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Theme System

Our design system supports both light and dark themes using CSS custom properties. 
The theme system is built with these key features:

- Automatic system theme detection
- Manual theme toggle
- Theme persistence
- Smooth transitions between themes

### Usage

1. Initialize the theme system:
\`\`\`typescript
import { initializeTheme } from '@owly/utils/theme-switcher';

// Call this when your app starts
initializeTheme();
\`\`\`

2. Add the ThemeToggle component:
\`\`\`tsx
import { ThemeToggle } from '@owly/components/theme-toggle';

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
\`\`\`

### CSS Variables

Our theme system uses semantic tokens that map to different values in light and dark modes:

#### Background Colors
- \`--background-primary\`
- \`--background-secondary\`
- \`--background-secondary-hover\`
- \`--background-secondary-pressed\`
...

#### Content Colors
- \`--content-primary\`
- \`--content-secondary\`
- \`--content-tertiary\`
...

#### Border Colors
- \`--border-primary\`
- \`--border-secondary\`
- \`--border-tertiary\`
...

### Programmatic Theme Control

You can also control the theme programmatically:

\`\`\`typescript
import { setTheme, toggleTheme, getTheme } from '@owly/utils/theme-switcher';

// Set theme directly
setTheme('dark');

// Toggle between themes
toggleTheme();

// Get current theme
const currentTheme = getTheme();
\`\`\`
        `,
      },
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThemePreview: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div>
          <h3>Light Theme</h3>
          <div
            data-theme="light"
            style={{ padding: '20px', background: 'var(--background-primary)' }}
          >
            <ThemeToggle />
          </div>
        </div>
        <div>
          <h3>Dark Theme</h3>
          <div
            data-theme="dark"
            style={{ padding: '20px', background: 'var(--background-primary)' }}
          >
            <ThemeToggle />
          </div>
        </div>
      </div>
    );
  },
};
