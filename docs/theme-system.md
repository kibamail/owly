# Owly Design System - Theme Documentation

## Overview

The Owly Design System supports a comprehensive theming system that enables seamless switching between light and dark modes. Our theming system is built using CSS custom properties (variables) and follows a semantic token approach.

## Theme Structure

The theme system is organized into three layers:

1. **Base Colors** (`base-colors.css`)

   - Contains primitive color values
   - Used as building blocks for semantic tokens
   - Never used directly in components

2. **Semantic Tokens** (light.css/dark.css)

   - Meaningful, context-aware variables
   - Maps to different base colors depending on theme
   - Used directly in components

3. **Component Styles**
   - Uses semantic tokens for all color values
   - Automatically adapts to theme changes
   - Maintains consistency across themes

## Usage

### In Components

```css
.your-component {
  background-color: var(--background-secondary);
  color: var(--content-primary);
  border: 1px solid var(--border-primary);
}

.your-component:hover {
  background-color: var(--background-secondary-hover);
}
```

### Theme Switching

```typescript
import { setTheme, toggleTheme, getTheme } from '@owly/utils/theme-switcher';

// Set theme directly
setTheme('dark');

// Toggle between themes
toggleTheme();

// Get current theme
const currentTheme = getTheme();
```

### Theme Toggle Component

```tsx
import { ThemeToggle } from '@owly/components/theme-toggle';

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

## Available Tokens

### Background Colors

- `--background-primary`
- `--background-secondary`
- `--background-secondary-hover`
- `--background-secondary-pressed`
- `--background-brand`
- `--background-brand-hover`
- `--background-brand-pressed`
- `--background-info`
- `--background-positive`
- `--background-negative`
- `--background-notice`

### Content Colors

- `--content-primary`
- `--content-secondary`
- `--content-tertiary`
- `--content-brand`
- `--content-link`
- `--content-link-hover`
- `--content-link-pressed`
- `--content-disabled`

### Border Colors

- `--border-primary`
- `--border-secondary`
- `--border-tertiary`
- `--border-focus`
- `--border-brand`

## Best Practices

1. **Always Use Semantic Tokens**

   - ✅ `var(--background-primary)`
   - ❌ `var(--gray-900)`

2. **Test Both Themes**

   - Ensure components look good in both themes
   - Check color contrast ratios
   - Verify interactive states

3. **Consider State Changes**

   - Include hover/focus/pressed states
   - Test disabled states in both themes
   - Verify error/success states

4. **Maintain Accessibility**
   - Meet WCAG 2.1 contrast requirements
   - Test with screen readers
   - Ensure focus states are visible

## Theme Switching Performance

The theme system is optimized for performance:

- Uses CSS Custom Properties for instant updates
- Smooth transitions for color changes
- No flash of unstyled content
- Efficient DOM updates

## Adding New Tokens

When adding new semantic tokens:

1. Add to both light and dark theme files
2. Document the new token
3. Add to theme tests
4. Verify contrast ratios
5. Update component documentation

## Common Issues

### Flash of Wrong Theme

- Initialize theme early in application lifecycle
- Use `initializeTheme()` before rendering

### Inconsistent Colors

- Always use semantic tokens
- Avoid hard-coded colors
- Check token inheritance

### Transition Issues

- Use provided transition classes
- Avoid transitioning to/from `auto`
- Test on different browsers
