/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
      extend: {
          "colors": {
              "surface-container-lowest": "#ffffff",
              "tertiary": "#005875",
              "accent-gold": "#C9A96E",
              "on-background": "#211a17",
              "primary-container": "#c0392b",
              "on-primary": "#ffffff",
              "on-secondary-fixed": "#261900",
              "surface-container-highest": "#ede0db",
              "on-tertiary-fixed-variant": "#004d66",
              "secondary": "#745a27",
              "inverse-on-surface": "#fceee9",
              "text-primary": "#2C2522",
              "surface-container": "#f9ebe6",
              "surface-tint": "#b02d21",
              "primary-fixed-dim": "#ffb4a9",
              "secondary-fixed-dim": "#e4c285",
              "tertiary-fixed": "#c0e8ff",
              "on-error": "#ffffff",
              "surface-container-low": "#fff1ec",
              "on-primary-fixed-variant": "#8e130c",
              "on-secondary-container": "#795f2b",
              "background": "#FEFCFA",
              "error-container": "#ffdad6",
              "inverse-primary": "#ffb4a9",
              "on-error-container": "#93000a",
              "surface": "#FBF7F3",
              "on-surface": "#211a17",
              "primary": "#9e2016",
              "on-secondary": "#ffffff",
              "outline": "#8d706c",
              "surface-bright": "#fff8f6",
              "brand-red": "#C0392B",
              "secondary-fixed": "#ffdea4",
              "text-secondary": "#5C4A44",
              "on-surface-variant": "#59413d",
              "secondary-container": "#fedb9b",
              "on-tertiary-container": "#d3eeff",
              "on-tertiary-fixed": "#001e2b",
              "surface-dim": "#e4d7d2",
              "on-primary-container": "#ffe5e1",
              "primary-fixed": "#ffdad5",
              "surface-container-high": "#f3e5e0",
              "tertiary-fixed-dim": "#80d0f8",
              "on-secondary-fixed-variant": "#5a4312",
              "outline-variant": "#e1bfb9",
              "on-tertiary": "#ffffff",
              "tertiary-container": "#007296",
              "error": "#ba1a1a",
              "inverse-surface": "#362f2c",
              "on-primary-fixed": "#410000",
              "surface-variant": "#ede0db"
          },
          "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
          },
          "spacing": {
              "margin-desktop": "64px",
              "margin-mobile": "20px",
              "container-max-width": "1280px",
              "unit": "8px",
              "gutter": "24px",
              "section-padding": "120px"
          },
          "fontFamily": {
              "headline-xl": ["EB Garamond"],
              "body-md": ["DM Sans"],
              "headline-lg": ["EB Garamond"],
              "headline-lg-mobile": ["EB Garamond"],
              "body-lg": ["DM Sans"],
              "label-md": ["DM Sans"],
              "label-sm": ["DM Sans"],
              "headline-md": ["EB Garamond"]
          },
          "fontSize": {
              "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.01em", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "400"}],
              "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "400"}],
              "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
              "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
              "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "400"}],
              "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "500"}]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
};
