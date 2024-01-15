const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      "max-screen-1200": { max: "1200px" },
      "max-screen-1100": { max: "1100px" },
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    colors: {
      primary: {
        vlight: "rgba(237, 28, 36, 0.06)",
        light: "#ff5f4e",
        DEFAULT: "#90ccc2",
        dark: "#b20000",
        vdark: "#54060a"
      },
      secondary: {
        vlight: "rgba(69, 90, 100, 0.06)",
        light: "#718792",
        DEFAULT: "#2d4686",
        dark: "#1c313a",
        vdark: "#102027",
        hover: "#0772BD"
      },
      error: {
        vlight: "#feedeb",
        light: "rgba(244, 67, 54, 0.8)",
        DEFAULT: "#f44336",
        dark: "#e31b0c",
        vdark: "#621b16"
      },
      warning: {
        vlight: "#fff5e6",
        light: "#ffb547",
        DEFAULT: "#ff9800",
        dark: "#c77700",
        vdark: "#663d00"
      },
      success: {
        success: "#eef7ee",
        light: "#7bc67e",
        DEFAULT: "#4caf50",
        dark: "#3b873e",
        vdark: "#1e4620"
      },
      disabled: {
        hover: "#f4f4f4",
        vlight: "#fafafa",
        light: "rgba(0, 0, 0, 0.08)",
        DEFAULT: "rgba(0, 0, 0, 0.3)",
        dark: "#8b8b8b"
      },
      "color-base": {
        vlight: "rgba(117, 117, 117, 0.08)",
        light: "rgba(117, 117, 117, 0.6)",
        DEFAULT: "rgba(0, 0, 0, 0.54)"
      },
      info: {
        vlight: "rgba(69, 90, 100, 0.06)",
        light: "#718792",
        DEFAULT: "#63bab1",
        dark: "#1c313a",
        vdark: "#102027",
        hover: "#1c313a"
      },
      dark: {
        vlight: "rgba(69, 90, 100, 0.06)",
        light: "#718792",
        DEFAULT: "#232329",
        dark: "#1c313a",
        vdark: "#102027",
        hover: "#3b3b42"
      },
      stroke: {
        light: "rgba(0, 0, 0, 0.08)",
        DEFAULT: "rgba(0, 0, 0, 0.2)",
        dark: "rgba(0, 0, 0, 0.6)"
      },
      white: "#ffffff",

      "lm-txt-primary": "rgba(0, 0, 0, 0.87)",
      "dm-txt-primary": "#ffffff",
      "lm-txt-secondary": "rgba(0, 0, 0, 0.54)",
      "dm-txt-secondary": "rgba(255, 255, 255, 0.7)",
      "lm-txt-disabled": "rgba(0, 0, 0, 0.38)",
      "dm-txt-disabled": "rgba(255, 255, 255, 0.5)",
      "lm-bg": "#ffffff",
      "dm-bg": "#f3f5f7",
      "light-gray": "#e0e0e0",
      "status-success": "#2ecc71",
      "status-warning": "#f39c12",
      "status-warning-light": "#f1c40f",
      "border-table": "#E4E4E4",
      black: colors.black,
      red: colors.red,
      gray: colors.gray,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      green: colors.green,
      cyan: colors.cyan,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      "action-color": "#ECF5FE",
      "pink-hover": "#f8bcbc",
      "orange-hover": "#fadbad",
      "green-hover": "#b7e7b4",
      "white-hover": "#c4c3c3",
      severity: {
        0: {
          default: "#FFFFFF",
          hover: "#C4C3C3"
        },
        1: {
          default: "#FAA8A8",
          hover: "#F8BCBC"
        },
        2: {
          default: "#F3C377",
          hover: "#FADBAD"
        },
        3: {
          default: "#84E280",
          hover: "#B7E7B4"
        }
      },
      "severity-dashboard": {
        0: {
          default: "#000000",
          hover: "#C4C3C3"
        },
        1: {
          default: "#FAA8A8",
          hover: "#F8BCBC"
        },
        2: {
          default: "#F3C377",
          hover: "#FADBAD"
        },
        3: {
          default: "#84E280",
          hover: "#B7E7B4"
        }
      }
    },
    spacing: {
      px: "1px",
      0: "0",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem",
      "25px": "25px",
      256: "256px"
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: ".5rem",
      full: "9999px"
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      md: "1.125rem", // 18px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
      "2xl": "1.75rem", // 28px
      "3xl": "2rem", // 32px
      "4xl": "2.5rem", // 40px
      "5xl": "3rem", // 48px
      "6xl": "4rem", // 64px
      "7xl": "5.5rem" // 88px
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 4px 5px 0 rgba(0, 0, 0, 0.16)",
      md:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      notify: "0 3px 16px 0 rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      button:
        "0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.14), 0 3px 5px -2px rgba(0, 0, 0, 0.2)",
      none: "none",
      calendar:
        "0 8px 10px 1px rgb(0 0 0 / 20%), 0 3px 14px 2px rgb(0 0 0 / 14%), 0 5px 5px -3px rgb(0 0 0 / 12%)"
    },
    fontFamily: {
      heading: "Helvethaica, sans-serif",
      body: "Sarabun, sans-serif",
      monospace: "monospace"
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900"
    },
    extend: {
      minWidth: {
        4: "4rem"
      },
      width: {
        256: "256px"
      },
      minHeight: {
        60: "60px"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-./,
      variants: ["after", "before", "hover", "selection"]
    }
  ]
};
