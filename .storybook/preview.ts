import { themes } from '@storybook/theming';
import '../src/app/globals.css'

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    docs: {
        theme: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
