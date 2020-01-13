import React from "react";
export const themes = {
  light: {
    foreground: "#100000",
    background: "#0eeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
