/* eslint-disable */
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],

  theme: {
    extend: {
      colors: {
        nuxt: {
          gray: '#2F495E',
          lightgreen: '#00C58E',
          green: '#108775',
        },

        primary: {
          base: '#00C58E',
          light: '#00E0A1',
          dark: '#07A377',
        },

        light: {
          surface: '#F8FAFC',
          onSurfacePrimary: '#2F495E',
          onSurfaceSecondary: '#606F7B',
          // elevatedSurface: defaultTheme.colors.white,
          // border: defaultTheme.colors.gray['300'],
        },

        dark: {
          surface: '#2C3E50',
          onSurfacePrimary: '#F5F7FA',
          onSurfaceSecondary: '#B8C2CC',
          elevatedSurface: '#2F495E',
          // border: defaultTheme.colors.gray['600'],
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      const colorModeVariants = ['light', 'dark'];
      colorModeVariants.forEach(mode => {
        addVariant(mode, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${mode}-mode .${e(`${mode}${separator}${className}`)}`;
          });
        });
      });
      const pseudoVariants = ['after', 'before'];
      pseudoVariants.forEach(pseudo => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`;
          });
        });
      });
      // generate chained color mode and pseudo variants
      colorModeVariants.forEach(mode => {
        pseudoVariants.forEach(pseudo => {
          addVariant(`${mode}:${pseudo}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${pseudo}${separator}${className}`
              )}::${pseudo}`;
            });
          });
        });
      });
      // states for color modes
      const states = ['hover'];
      colorModeVariants.forEach(mode => {
        states.forEach(state => {
          addVariant(`${mode}:${state}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${state}${separator}${className}`
              )}:${state}`;
            });
          });
        });
      });
    }),
  ],
};
/* eslint-enable */
