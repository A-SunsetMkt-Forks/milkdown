import type { StorybookConfig } from '@storybook/html-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/html-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.mts',
      },
    },
  },
}

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
export default config
