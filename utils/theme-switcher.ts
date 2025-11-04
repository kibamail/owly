type Theme = 'light' | 'dark';

const THEME_KEY = 'owly-theme-preference';

export const setTheme = (theme: Theme) => {
  console.log('theme', theme);
  // Ensure we have a valid theme
  if (theme !== 'light' && theme !== 'dark') {
    console.warn('Invalid theme specified:', theme);
    theme = 'light'; // fallback to light theme
  }

  // Set the theme in localStorage first
  localStorage.setItem(THEME_KEY, theme);

  // Then update the DOM
  document.documentElement.setAttribute('data-theme', theme);

  // Force immediate style application
  requestAnimationFrame(() => {
    // Force a reflow to ensure styles are applied
    document.documentElement.style.display = 'none';
    document.documentElement.offsetHeight;
    document.documentElement.style.display = '';

    // Update critical styles immediately
    document.documentElement.style.setProperty('color-scheme', theme);
    document.body.style.setProperty(
      'background-color',
      `var(--background-primary)`
    );
    document.body.style.setProperty('color', `var(--content-primary)`);
  });
};

export const getTheme = (): Theme => {
  return (localStorage.getItem(THEME_KEY) as Theme) || 'light';
};

export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};

export const initializeTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY) as Theme;

  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  // Listen for system theme changes
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });

  // Listen for localStorage changes
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_KEY && e.newValue) {
      setTheme(e.newValue as Theme);
    }
  });

  // Add a mutation observer to ensure theme is always in sync
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'data-theme'
      ) {
        const currentTheme = document.documentElement.getAttribute(
          'data-theme'
        ) as Theme;
        if (currentTheme && currentTheme !== getTheme()) {
          setTheme(currentTheme);
        }
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
};
