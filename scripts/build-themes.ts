import { build } from 'esbuild';
import { globSync } from 'glob';
import path from 'path';

const buildThemes = async () => {
  const entryPoints = [
    'styles/themes.css',
    ...globSync('styles/tokens/themes/*.css'),
  ];

  try {
    await build({
      entryPoints,
      outdir: 'dist/css',
      bundle: true,
      minify: true,
      sourcemap: true,
      loader: {
        '.css': 'css',
      },
      target: ['es2020', 'chrome80', 'firefox80', 'safari14'],
    });

    console.log('✅ Themes built successfully');
  } catch (error) {
    console.error('Error building themes:', error);
    process.exit(1);
  }
};

buildThemes();
